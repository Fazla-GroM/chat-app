import { GetServerSideProps } from 'next'
import { $fetch } from 'ohmyfetch'
import { useMemo } from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { TCommentResponse } from 'types'
import { processCommentList } from 'utils'

const fetchMessages = async () => $fetch('https://www.fakebackend.com/api/channel', { retry: 0 })

const HomePage = () => {
    const messagesQuery = useQuery<TCommentResponse>(['channel'], () => fetchMessages(), { staleTime: Infinity })

    const processedCommentsData = useMemo(() => {
        if (!messagesQuery.data) {
            return []
        }
        return processCommentList(messagesQuery.data.data.comments)
    }, [messagesQuery.data])

    console.log('rerender', processedCommentsData)

    return <h1>home page</h1>
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async context => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['channel'], () => fetchMessages())

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        } // will be passed to the page component as props
    }
}
