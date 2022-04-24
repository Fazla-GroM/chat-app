/* eslint-disable consistent-return */
import { useMemo } from 'react'
import { filterXSS } from 'xss'

const useInnerHtml = (html?: string) => {
    const htmlProps = useMemo(() => {
        if (!html) {
            return {}
        }

        return {
            dangerouslySetInnerHTML: {
                __html: filterXSS(html, {
                    whiteList: {
                        a: ['href', 'title', 'target']
                    },
                    css: false
                })
            }
        }
    }, [html])

    return htmlProps
}

export { useInnerHtml }
