var faker = require ('faker');
const { idText } = require('typescript');

var database= {users: []};

for (var i =1; i<30; i++){
database.users.push({
    id: i,
    
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    userName: faker.internet.userName(),
    password : faker.internet.password(),
    imageUrl: "https://sources.unsplash.com/1600x900/?product"

});
}
console.log(JSON.stringify(database));