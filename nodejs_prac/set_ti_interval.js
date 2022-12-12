
//simple example

// setInterval(()=>{
// console.log('this is me');
// },3000);


let count =0;

function int_examp(){
    
console.log(count+1);
count++;

if(count==5){
    clearInterval(timerid);
}

}


const timerid= setInterval(int_examp,1000);






