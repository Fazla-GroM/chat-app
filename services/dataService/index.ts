import { $fetch } from 'ohmyfetch'
import { IDataService } from 'types'

/**
 * A dataService builder that provides core functionality for dataFetching.
 * All underlying useGet<type> hooks use it to fetch data.
 *
 * @param {string} [apiBaseUrl]
 * @return {*}  {IDataService}
 */
const createDataService = (apiBaseUrl?: string): IDataService => {
    if (process.env.NODE_ENV === 'development' && !apiBaseUrl) {
        console.warn('[createDataService]: no "apiBaseUrl" provided!')
    }

    const fetchInstance = $fetch.create({ baseURL: apiBaseUrl, retry: 0 })

    return {
        async getList(resource: string, params: any) {
            return fetchInstance(resource, { params })
        }
    }
}

export { createDataService }
