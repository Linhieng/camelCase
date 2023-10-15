import camelCase from 'camelcase'

// export function formatDate(date: Date): string {
//     return date.toLocaleString()
// }

/**
 * 将对象的 key 变为 camelCase 风格
 */
export default function convertToCamelCase(obj: any): object {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    if (obj instanceof Date) {
        // return formatDate(obj)
        return obj
    }

    if (Array.isArray(obj)) {
        return obj.map((item) => convertToCamelCase(item))
    }

    const camelCaseObj = {} as any
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // const camelCaseKey = key.replace(/_([a-z])/g, (_, letter) =>
            //     letter.toUpperCase(),
            // )
            const camelCaseKey = camelCase(key)
            camelCaseObj[camelCaseKey] = convertToCamelCase(obj[key])
        }
    }

    return camelCaseObj
}
