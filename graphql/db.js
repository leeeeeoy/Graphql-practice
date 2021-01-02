export const people = [
    {
        id: "1",
        name: "leeeeeoy",
        age: 22,
        gender: "female",
    },
    {
        id: "2",
        name: "AAA",
        age: 25,
        gender: "male",
    },
    {
        id: "3",
        name: "BBB",
        age: 23,
        gender: "male",
    },
    {
        id: "4",
        name: "CCC",
        age: 20,
        gender: "female",
    },
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0]
}