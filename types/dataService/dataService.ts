export type TBaseResponse = {
    data: Record<string, unknown>
}

export type TListResponse<TResponseData extends TBaseResponse> = {
    data: TResponseData['data']
}

export type TBaseParams = {
    [key: string]: unknown
}

export type TGetListParams = TBaseParams

export interface IDataService {
    getList: <TResponseData extends TBaseResponse>(
        resource: string,
        params?: TBaseParams
    ) => Promise<TListResponse<TResponseData>>
}

export interface IDataServiceProvider {
    children: React.ReactNode
    dataService: IDataService
}

export type TUseGetListVariables = {
    resource: string
    params?: TGetListParams
}
