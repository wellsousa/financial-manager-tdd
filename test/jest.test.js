test("devo conhecer as principais assertivas do jest", () => {

    let number = 25 
    //expect(number).toBeNull()
    //expect(number).toBe(10)
    //expect(number).not.toEqual(10)
    //expect(number).not.toBeNull()
    //expect(number).toBeGreaterThan(12)
    //expect(number).toBeLesserThan(20)
})

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'John', mail: 'john@mail.com'}

    //expect(obj).toHaveProperty('name')
    //expect(obj).toHaveProperty('name2')
    //expect(obj).toHaveProperty('name', 'John')
    //expect(obj).toHaveProperty('name', 'mary')
    //expect(obj.name).toBe('John')

    const obj2 = {name: 'Mary', mail: 'mary@mail.com'}
    const obj3 = {name: 'John', mail: 'john@mail.com'}
    expect(obj).toEqual(obj3)

})