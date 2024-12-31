
 let myfood = prompt(" choose your food.! \n select and item to order \n 1. Pizza - 500rs \n 2. burger - 300rs \n 3. fries - 150rs \n 4. drink - 100rs")
console.log(myfood + " food selected ");

let itemname = ""
let itemprice = 0

if (myfood === '1'){
    itemname = "pizza"
    itemprice = 500;
} else if (myfood === '2'){
    itemname = "burger"
    itemprice = 300
 } else if (myfood === '3'){
    itemname = "fries"
    itemprice = 150
 }else if(myfood === '4'){
    itemname = "drink"
    itemprice = 100
 } else{
    alert ("invalid item selected please refresh and try again")
    console.log("invalid item selected");

 }
 let confirmorder = '';
 if (itemprice > 0) {  
     confirmorder = prompt(`You selected ${itemname} (Rs. ${itemprice}). Type 'yes' to confirm or 'no' to cancel.`);
     console.log("Confirm your order: " + confirmorder);
 } else {
     console.log("No valid item selected, no order to confirm.");
 }

if(confirmorder.toLowerCase()=== 'yes'){
    alert(`thank you! your order for ${itemname} has been placed total bill rs. ${itemprice}`)
    console.log(`order confirmed ${itemname} total bill rs. ${itemprice}`);

   
    
} else if (confirmorder.toLowerCase()=== 'no') {
alert('Order canceled')
console.log("order canceled by user.");

} else{
alert("invalid input in confirmation. please refresh and try again")
console.log("invalid confirmation input.");

}
  
