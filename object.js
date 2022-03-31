
function formatArr(array) {
    
    let myArray = [];

    array.forEach(element => {
        
        let data = element.split(",");
        let name = data[0].split(" ");
        let output = `${name[0]} : {second-name: ${name[1]}, age: ${data[1]}}`

        myArray.push(output);
    });
    return myArray;
}

console.log(formatArr(["Patrick wyne, 30", "Alian Dwine, 22", "Eric mimi , 21"]))


