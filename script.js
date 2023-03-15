const players = ['John', 'Bob', 'Alice', 'Poppy'];

const person = {
      name: 'John Doe',
      age: 80
    };

// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement
// let team = players;

const team = players;
const team1 = [...players]; // spread operator to create a copy of the array

const cap1 = { ...person };

export {players,person,team,team1,cap1}
