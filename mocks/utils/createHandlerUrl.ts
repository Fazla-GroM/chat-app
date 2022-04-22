const createHandlerUrl = (path: string, baseApiUrl?: string) => {
    return [baseApiUrl, path].filter(Boolean).join('')
}

export { createHandlerUrl }
