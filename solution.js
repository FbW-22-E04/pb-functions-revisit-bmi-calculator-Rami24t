function calculateBMI(name, weight, height){
    let BMI = weight/(height*height);
    return {name, BMI};
    }  
function whoIsBiggest(name1,name2,BMI1,BMI2){
    if(BMI2>BMI1)
    return name2;
    else if(BMI1>BMI2)
    return name1;
    else if (BMI1==BMI2)
    return 'neither';
    else 
    return 0;
    }
//Bonus
function whoIsBiggestB(name1,name2,weight1,weight2,height1,height2){
    BMI1 = calculateBMI(name1, weight1, height1);
    BMI2 = calculateBMI(name2, weight2, height2);
    if(BMI2.BMI>BMI1.BMI)
    return BMI2.name;
    else if(BMI1.BMI>BMI2.BMI)
    return BMI1.name;
    else if (BMI1.BMI==BMI2.BMI)
    return 'neither';
    else 
    return 0;
    }

console.log(whoIsBiggestB('Saleem', 'Tala', 100, 50, 1.5,1.8));
