console.log('hello')

const students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getNames = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const newValue = array[i].name
        newArray[i] = newValue;
    }
    return newArray

}

console.log(getNames(students))

const getGreetings = (array) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const newValue = `Hi, i'm ${array[i].name}.`
        newArray[i] = newValue;
    }
    return newArray
}

console.log(getGreetings(students))


const selfMadeMap = (array, func) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const newValue = func(array[i])
        newArray[i] = newValue;
    }
    return newArray
}

console.log(selfMadeMap(students, st => st.name))

const selfMadeFilter = (array, func) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const newValue = func(array[i])
        newValue && newArray.push(array[i])
    }
    return newArray
}

console.log(selfMadeFilter(students, st => st.name === "Bob"))

const selfMadeFind = (array, func) => {
    for (let i = 0; i < array.length; i++) {
        if(func(array[i])) return array[i]
    }

}