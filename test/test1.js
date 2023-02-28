var person = {
    name: "Mr.Cha",
    age: 20
};

console.log(`who is ${person.name}`);
console.log(__dirname);
console.log(__filename);

process.argv.forEach(
    function (item, index) {
        console.log(index + ':' + item)
    }
);