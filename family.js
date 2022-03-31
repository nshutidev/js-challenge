const families = [{
    fatherName: "peter",
    motherName:"mary",
    childrenNumber:-4
},
{
    fatherName: "paul",
    motherName:"ariane",
    childrenNumber:5
},
{
    fatherName: "yves",
    motherName:"yvette",
    childrenNumber:2
}]

const ChildrenAverage = families =>{
    
    //a utility function to compute the average
    const average = (familyNumber, childrenNumber) =>{
         return Math.round(childrenNumber/familyNumber);
    }

    console.log("The API is starting...")
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            let familyNumber =0, childrensNum = 0;
            
            //Loop through every family
            
            families.forEach(family => {
                if (family.fatherName === 'Yves') {
                    reject("Yves is not an allowed dad in 2022.")
                }
                if (family.childrenNumber < 0) {
                   return;
                }
                else{
                    family.childrenNumber ++;
                    familyNumber++;
                    childrensNum += family.childrenNumber;
                }
            });
            resolve(`The Children average number: ${average(familyNumber,childrensNum)}`)
        }, 1000);
    })

}

ChildrenAverage(families)
.then(data => console.log(data))
.catch(err => console.log(err))