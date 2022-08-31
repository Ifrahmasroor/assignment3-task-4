let  random  = Math.floor (Math.random()*6) ;
console.log(random);
 let r  = prompt('enter a value');

 r  = parseInt(r)
 console.log(r);
 switch(r){
  case 0 :
console.log('0 is a random number');
  break;
  case 1:
  console.log('1 is a random number');
break;
case 2:
console.log('2 is a random number');
break;
case 3:
console.log('3 is a random number');
break;
case 4:
console.log('4 is a random number');
break;
case 5:
console.log('5 is a random number');
break;
 
 default:
  console.log("not a randon number");
 }
 console.log( 'sum of '+ ( r + 5)) ;