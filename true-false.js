/**
 * falsy
 * 0
 * ''
 * ""
 * ``
 * NaN
 * undefined
 * null
 * false
 */

 /**
  * truthy
  * " "
  * ' '
  * '0'
  * {}
  * []
  * true
  * 'false'
  * "true";
  */

let name = ``;
if (name) {
   console.log(true); 
}else{
    console.log(false);
}