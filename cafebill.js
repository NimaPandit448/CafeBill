



function OrderNow() {
    var burgers = document.getElementById('burgers').value
    var burgerqnt = parseInt(document.getElementById('burgerqnt').value)
   var bill = 0

    var price = 0;
    if (burgers == "Veg Cheese Burger") {
        price = 50
    }
    else if (burgers == "Masala Veg Burger") {
        price = 90  
    }
    else if (burgers == "Butter Veg Burger") {
        price = 100
    }
    else if (burgers == "Veg Cheese-Oil Burger") {
        price = 110
    }
    else {
        price = 0
    }

    bill = burgerqnt*price
    console.log(bill)
    document.getElementById('cal1').innerHTML = bill
   
}

function colddrinkstotal() {
    var colddrinks = document.getElementById('colddrinks').value
    var colddrinksqnt = parseInt(document.getElementById('colddrinksqnt').value)
  var drinksbill = 0;
       var price = 0;
    if (colddrinks == "Pepsi King") {
        price = 50
    }
    else if (colddrinks == "Coco Cola") {
        price = 90
    }
    else if (colddrinks == "Maza ") {
        price = 100
    }
    else if (colddrinks == "7uplarge ") {
        price = 110
    }
    else {
        price = 0
    }

     drinksbill = colddrinksqnt * price
    console.log(drinksbill)

    document.getElementById('colddrinkstotal').innerHTML = drinksbill
   

}

function friestotal() {
    var fries = document.getElementById('fries').value
    var friesqnt = parseInt(document.getElementById('friesqnt').value)
    var friesbill= 0;
    var price = 0;
    if (fries == "Cheese Chips") {
        price = 90
    }
    else if (fries == "Aloo Tikki") {
        price = 50
    }
    else if (fries == "Olive-Chili Chips") {
        price = 70
    }
    else if (fries == "Cheese-Oil Masala") {
        price = 80
    }

    else {
        price = 0
    }

    friesbill = friesqnt * price
    console.log(friesbill);
    document.getElementById('friestotal').innerHTML = friesbill

}
function demo() {

    var call = parseInt(document.getElementById('cal1').innerHTML)
    var colddrinkstotal = parseInt(document.getElementById('colddrinkstotal').innerHTML)
    var friestotal = parseInt(document.getElementById('friestotal').innerHTML)
   
    var total = call + colddrinkstotal + friestotal
    console.log(total)
    document.getElementById('totalbill').innerHTML = + total
}