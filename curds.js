let nam = document.getElementById("nam");
let price = document.getElementById("price");
let texs = document.getElementById("texs");
let ads = document.getElementById("ads");
let dwscount = document.getElementById("dwscount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let creat = document.getElementById("creat");
let search = document.getElementById("search");
let sn = document.getElementById("sn");
let sc = document.getElementById("sc");

console.log(nam,price,texs,ads,dwscount,total,count,category,creat,search,sn,sc);


//gettotal
function getTotal(){

 if(price.vlue!=''){
    let result=(+price.value+ +texs.value+ +ads.value)-+dwscount.value;
    total.innerHTML= result;
 }

}






let datapro=[];
if(localStorage.product!=''){
   datapro= JSON.parse(localStorage.product);
   

}
else{
 datapro = [];
}
    
   creat.onclick = function(){
      let newpro = {
         nam:nam.value,
         price:price.value,
         texs:texs.value,
         ads:ads.value,
         dwscount:dwscount.value,
         total:total.innerHTML,
         count:count.value,
         category:category.value
         
      }
   
      // localStorage.setItem('product',  JSON.stringify(datapro));
      
      console.log(newpro);
      console.log(newpro);
      datapro.push(newpro);
      console.log(localStorage);

   }
