let bread = 1;
let milk = 2;
let pant = 3;


switch(pant || bread || milk){

    case  1 : {
        
console.log("Bread is selected");
    }
    break;

    case 2 : {

        console.log("Milk is selected");
    }break;

    case 3 : {
        console.log("Pant is selected");
    }
    break;
    default : 
        console.log("No item is selected");
}

