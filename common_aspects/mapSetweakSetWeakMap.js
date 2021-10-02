const obj ={
    name:'Antonio', 
    age: 26, 
    job: 'Fullstack'
}

const entries = [
    ['name', 'Antonio'],
    ['age', 26],
    ['job', 'Fullstack']
]

const map = new Map(entries) // makes a dictionary of objects key-value pair
console.log(map.get('job')) // get by key