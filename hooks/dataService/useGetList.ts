import { useMemo } from 'react'
import { useQuery, UseQueryOptions as TUseQueryOptions } from 'react-query'
import { TBaseResponse, TListResponse, TUseGetListVariables } from 'types'
import { createResourceQueryKey, EResourceBaseQueryKeyType } from 'utils'
import { useDataService } from './ useDataService'

/**
 * A hook for fetching list data.
 * It uses dataService for data fetching hence it must be used inside DataService Provider.
 * For queryOptions and more advanced usage see https://react-query.tanstack.com/reference/useQuery
 *
 * @template TResponseData
 * @template TResponseError
 * @param {TUseGetListVariables} variables
 * @param {(Omit<TUseQueryOptions<TListResponse<TResponseData>, TResponseError>, 'queryKey' | 'queryFn'>)} [queryOptions]
 * @return {*} UseQueryResult
 */
const useGetList = <TResponseData extends TBaseResponse, TResponseError = unknown>(
    variables: TUseGetListVariables,
    queryOptions?: Omit<TUseQueryOptions<TListResponse<TResponseData>, TResponseError>, 'queryKey' | 'queryFn'>
) => {
    const dataService = useDataService()

    const queryKey = useMemo(
        () => createResourceQueryKey(EResourceBaseQueryKeyType.List, variables?.resource, variables?.params),
        [variables]
    )

    const { data, ...restListQuery } = useQuery<TListResponse<TResponseData>, TResponseError>(
        queryKey,
        () => dataService.getList<TResponseData>(variables.resource, variables.params),
        queryOptions
    )

    return {
        data: data?.data,
        ...restListQuery
    }
}

export { useGetList }
