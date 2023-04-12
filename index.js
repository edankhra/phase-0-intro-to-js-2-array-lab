const cats=[
   "Milo",
   "Otis",
   "Garfield"
];
function destructivelyAppendCat(){
   cats.push('Ralph');
}
function destructivelyPrependCat(){
   cats.unshift("Bob");

}
function destructivelyRemoveLastCat(){
   cats.pop();
}
function destructivelyRemoveFirstCat(){
   cats.shift();
}

function appendCat(){
   const  newCat = [ ...cats,"Broom"];
   return newCat; 
}
function prependCat(){
   const  newCat = ["Arnold", ...cats,];
   return newCat; 
}
function removeLastCat(){
   const newCat = cats.slice(0,-1);
   return newCat;
   }

   function removeFirstCat(){
      const newCat = cats.slice(1);
      return newCat;
   }




























/*function destructivelyAppendCat(){
   cats.push("Ralph");
}
function destructivelyPrependCat(){
   cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
   cats.pop();
}
function destructivelyRemoveFirstCat()
{
   cats.shift();
}
function appendCat(){
   const newcats=[...cats, "Broom"];
   return newcats;
}
function  prependCat(){
   const newcats = ["Arnold", ...cats];
   return newcats;
}
function removeLastCat(){
const newcats = cats.slice(0,-1);
return newcats;
}
function removeFirstCat()
{
   const newcats = cats.slice(1);
   return newcats;
}
*/
