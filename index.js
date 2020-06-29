const pets = [
    {
        name: 'Marley',
        type: 'dog',
        age: 6
    },
    {
        name: 'Meg',
        type: 'cat',
        age: 15
    },
    {
        name: 'Nemo',
        type: 'fish',
        age: 1
    }
];


//primeira forma de fazer externalizado
const validar = (numero) => {
    return numero < 10;
}

const petsFilter2 = pets.filter( (pets) => {
    return validar(pets.age);
});



//outra forma de fazer
const petsFilter = pets.filter( (pets) => {
    return pets.age < 10;
});

//parou nos 12 min



console.log(petsFilter);
console.log(petsFilter2);

