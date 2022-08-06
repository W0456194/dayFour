var obj1 = {
    name: 'Person 1',
    age: '5',
};
var obj2 = {
    age: '5',
    name: 'Person 2',
};

const newLocal = _.isEqual(obj1, obj2);
console.log( newLocal);