/* eslint-env jest */

import camelCase from '../dist/esm'
test('忽略 Date 对象', () => {
    const testData = [
        {
            id: 1,
            real_name: '张仲景',
            password: '1234',
            doctor_code: '123',
            gender: 1,
            create_time: new Date('2023-10-14T13:00:31.000Z'),
            update_time: new Date('2023-10-14T14:28:07.000Z'),
            status: 1,
        },
    ]
    const expectObj = [
        {
            id: 1,
            realName: '张仲景',
            password: '1234',
            doctorCode: '123',
            gender: 1,
            createTime: new Date('2023-10-14T13:00:31.000Z'),
            updateTime: new Date('2023-10-14T14:28:07.000Z'),
            status: 1,
        },
    ]
    expect(camelCase(testData)).toEqual(expectObj)
})
