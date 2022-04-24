import { DataServiceContext } from 'providers'
import { useContext } from 'react'
import { IDataService } from 'types'

/**
 * A hook which exposes data service from DataServiceProvider.
 * It throws error if used outside DataServiceProvider scope.
 *
 * @return {*}  {IDataService}
 */
const useDataService = (): IDataService => {
    const dataServiceContext = useContext(DataServiceContext)

    if (!dataServiceContext) {
        throw new Error('[useDataService]: "useDataService" must be used within "DataServiceProvider"!')
    }

    return dataServiceContext
}

export { useDataService }
