export enum EResourceBaseQueryKeyType {
    One = 'one',
    Many = 'many',
    List = 'list'
}

/**
 * A helper method for building resource base query key.
 * Used inside useGet<type> hooks.
 *
 * @param {EResourceBaseQueryKeyType} type
 * @param {string} resource
 * @return {*}  {string}
 */
const createResourceBaseQueryKey = (type: EResourceBaseQueryKeyType, resource: string): string => {
    return `resource|${type}|${resource}`
}

/**
 * A helper method for building all resource base query keys.
 * Used inside useGet<type> hooks.
 *
 * @param {string} resource
 * @return {*}  {string[]}
 */
const createAllResourceBaseQueryKeys = (resource: string): string[] => {
    return Object.values(EResourceBaseQueryKeyType).map(keyValue => createResourceBaseQueryKey(keyValue, resource))
}

/**
 * A helper method which builds a complete query key for resource based on "resource", "resourceType" and provided params.
 * Used inside useGet<type> hooks.
 *
 * @param {EResourceBaseQueryKeyType} type
 * @param {string} resource
 * @param {Record<string, unknown>} [params]
 * @return {*}  {((string | Record<string, unknown> | undefined)[])}
 */
const createResourceQueryKey = (
    type: EResourceBaseQueryKeyType,
    resource: string,
    params?: Record<string, unknown>
): (string | Record<string, unknown> | undefined)[] => {
    return [createResourceBaseQueryKey(type, resource), params].filter(Boolean)
}

export { createAllResourceBaseQueryKeys, createResourceBaseQueryKey, createResourceQueryKey }
