import { createDataService } from './dataService'

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

const dataService = createDataService(apiBaseUrl)

export { dataService, createDataService }
