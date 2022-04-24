import { createContext } from 'react'
import { IDataService, IDataServiceProvider } from 'types'

const DataServiceContext = createContext<IDataService | undefined>(undefined)

/**
 * A Provider which exposes whole dataService to an application.
 * It wraps whole application.
 * All underlying useGet<type> hooks use data service which is provided bi it to fetch data.
 *
 * @param {IDataServiceProvider} { children, dataService }
 * @return {*}  {JSX.Element}
 */
const DataServiceProvider = ({ children, dataService }: IDataServiceProvider): JSX.Element => {
    return <DataServiceContext.Provider value={dataService}>{children}</DataServiceContext.Provider>
}

export { DataServiceContext, DataServiceProvider }
