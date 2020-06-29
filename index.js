
const pets = [
    {
        name: 'Marley',
        type: 'dog',
        age: 6,
        weigth: 10
    },
    {
        name: 'Meg',
        type: 'cat',
        age: 15,
        weigth: 5
    },
    {
        name: 'Nemo',
        type: 'fish',
        age: 1,
        weigth: 1
    },
    {
        name: 'Pipoca',
        type: 'dog',
        age: 4,
        weigth: 7
    },
    {
        name: 'Fred',
        type: 'dog',
        age: 3,
        weigth: 4
    },
    {
        name: 'Mioshy',
        type: 'cat',
        age: 15,
        weigth: 4
    },
    {
        name: 'Horsee',
        type: 'horse',
        age: 10,
        weigth: 150
    }
];


//filter

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

//console.log(petsFilter);
//console.log(petsFilter2);

//map
//retorna um novo array com a mesma quantidade de elemtos que o array inicial

const petNames = pets.map( (pet)=> {
  return pet.name;
})
//usando foreach
const forEachPetNames = [];
pets.forEach( (pet) => {
  forEachPetNames.push(pet.name);
});

//console.log(petNames);
//console.log(forEachPetNames);

//reduce
//executa uma função para cada elemento retornando um unico valor

//o zero é o valor inicial da variavel total
const totalWeigth = pets.reduce( (total, pet) => {
  return total + pet.weigth;
}, 0);

//comando somente com uma condição específica
const totalWeigthFilter = pets.reduce( (total, pet) => {

  if(pet.type !== "dog") return total; //irá retornar o valor total sem incrementar se não for cachorro
  return total + pet.weigth;
}, 0);

//outro exemplo
const totalWeigth2 = pets.reduce( (total, pet) => {
  return {
    totalAge: total.totalAge + pet.age,
    totalWeigth: total.totalWeigth + pet.weigth
  }
}, {totalAge:0, totalWeigth:0});

//console.log(totalWeigth2);

//encadeando tudo
//fazer um filtro para poegar apenas os cachorros


//isso
const dogs = pets.filter( (pet)=> {
  return pet.type === 'dog';
});

const totalWeigthDogs = dogs.reduce( (total, pet) => {
  return total + pet.weigth;
}, 0);
 //vira isso

 const totalWeigthDogsEncadeado = pets.filter( (pet) => {
   return pet.type === 'dog';
 }).reduce( (total, pet) => {
   return total + pet.weigth;
 },0);
console.log(totalWeigthDogsEncadeado);
