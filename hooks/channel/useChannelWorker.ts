import { useCallback, useEffect, useRef, useState } from 'react'
import { TComment, TCommentList } from 'types'

type TWorkerState = 'idle' | 'proccessing' | 'success' | 'error'

type TUseChannelWorker = {
    channelData: TCommentList
    status: TWorkerState
    isIdle: boolean
    isError: boolean
    isProccessing: boolean
    proccessData: (data: TComment[]) => Promise<void>
}

/**
 *  A specialized hook which creates Web Worker to proccess comments data.
 *  Take note that path to worker is relative.
 *
 * @return {TUseChannelWorker} TUseChannelWorker
 */
const useChannelWorker = (): TUseChannelWorker => {
    const workerRef = useRef<Worker | null>(null)
    const [workerState, setWorkerState] = useState<TWorkerState>('idle')
    const [channelData, setChannelData] = useState<TCommentList>([])

    useEffect(() => {
        workerRef.current = new Worker(new URL('../../workers/channelWorker.ts', import.meta.url))

        workerRef.current.onmessage = event => {
            setWorkerState('success')
            setChannelData(event.data as TCommentList)

            if (process.env.NODE_ENV === 'development') {
                console.log(`WebWorker Response => ${JSON.stringify(event.data)}`)
            }
        }

        workerRef.current.onerror = event => {
            setWorkerState('error')

            if (process.env.NODE_ENV === 'development') {
                console.log(`WebWorker Error => ${event.error}`)
            }
        }

        return () => {
            if (workerRef.current) {
                workerRef.current.terminate()
            }
        }
    }, [])

    const proccessData = useCallback(async (data: TComment[]) => {
        if (workerRef.current) {
            setWorkerState('proccessing')
            workerRef.current.postMessage(data)
        }
    }, [])

    return {
        channelData,
        proccessData,
        status: workerState,
        isIdle: workerState === 'idle',
        isError: workerState === 'error',
        isProccessing: workerState === 'proccessing'
    }
}

export { useChannelWorker }
