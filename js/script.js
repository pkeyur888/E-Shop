const product= [
  {
    id:1,
    name: "Sandisk Mirco SD",
    price: 43,
    img: "https://images-na.ssl-images-amazon.com/images/I/41M0JdhK3PL._AA160_.jpg",
    categories: "Best_Sellers Electronics"
},
{
    id:2,  
    name: "Wyze Camera v2",
    price: 37,
    img: "https://images-na.ssl-images-amazon.com/images/I/41dFbSyyPsL._AA160_.jpg",
    category: "New-Releases Electronics"
},
{
    id:3,
    name: "Echo Dot",
    price: 69,
    img: "https://images-na.ssl-images-amazon.com/images/I/41CRnvYqmqL._AA160_.jpg",
    category: "Sale Electronics"
},
{
    id:4,
    name: "Wyze Camera",
    price: 55,
    img: "https://images-na.ssl-images-amazon.com/images/I/31dz6wCIWML._AA160_.jpg",
    category: "Electronics"
},
{
    id:5,
    name: "Anker Sound Buds",
    price: 32,
    img: "https://images-na.ssl-images-amazon.com/images/I/31B+n7xrh4L._AA160_.jpg",
    category: "Sale Electronics"
},
{
    id:6,
    name: "Anker Wireless Charger",
    price: 29,
    img: "https://images-na.ssl-images-amazon.com/images/I/31tER0mi8wL._AA160_.jpg",
    category: "Best_Sellers Electronics"
},
{
    id:7,
    name: "Go Pro Hero 6",
    price: 529,
    img: "https://images-na.ssl-images-amazon.com/images/I/31fRgbwaVGL._AA160_.jpg",
    category: "Electronics sale"
},
{
    id:8,
    name: "Samsung Galaxy A8",
    price: 189,
    img: "https://m.media-amazon.com/images/I/41FIUOf1BHL._AC_UL436_.jpg",
    category: "Best_Sellers Electronics"
},
{
    id:9,
    name: "Kingston 512GB",
    price: 79,
    img: "https://m.media-amazon.com/images/I/71JLh+nx3bL._AC_UL436_.jpg",
    category: "Best_Sellers Electronics sale"
},
{
    id:10,
    name: "Bose QC 35",
    price: 449,
    img: "https://m.media-amazon.com/images/I/61r+E0oup6L._AC_UL436_.jpg",
    category: "Electronics"
},
{
    id:11,
    name: "TLC TV 55'",
    price: 719,
    img: "https://m.media-amazon.com/images/I/714ElWQ4JwL._AC_UL436_.jpg",
    category: "Best_Sellers Electronics"
},
{
    id:12,
    name: "Moto G7 Power",
    price: 259,
    img: "https://m.media-amazon.com/images/I/51a5gUDC4sL._AC_UL436_.jpg",
    category: "Best_Sellers Electronics"
},
{
    id:13,
    name: "Mpow Flame Headphones",
    price: 28,
    img: "https://m.media-amazon.com/images/I/61Uh025cziL._AC_UL436_.jpg",
    category: "Electronics sale"
},
{
    id:14,
    name: "AMD YD2600BBAFBOX",
    price: 232,
    img: "https://m.media-amazon.com/images/I/51W-O4Jn9EL._AC_UL436_.jpg",
    category: "Electronics"
},
{
    id:15,
    name: "Logitech G203 Prodigy",
    price: 29,
    img: "https://m.media-amazon.com/images/I/71BmDZ6u22L._AC_UL436_.jpg",
    category: "Electronics New-Releases"
},
{
  id:16,
  name: "CHEERIOS Chocolate",
  price: 2,
  img: "https://m.media-amazon.com/images/I/816s9s1J9EL._AC_UL320_.jpg",
  category: "Food"
},
{
  id:17,
  name: "CHEERIOS Chocolate",
  price: 2,
  img: "https://m.media-amazon.com/images/I/816s9s1J9EL._AC_UL320_.jpg",
  category: "Food"
}, {
  id:18,
  name: "CHEERIOS Milk",
  price: 2,
  img: "https://m.media-amazon.com/images/I/816s9s1J9EL._AC_UL320_.jpg",
  category: "Food"
},{
  id:19,
  name: "Thrasher Flame Short",
  price: 22,
  img: "https://images-na.ssl-images-amazon.com/images/I/41mUyabV6pL._SL260_SX200_CR0,0,200,260_.jpg",
  category: "Food"
},
{
  id:20,
  name: "Champion Mens Classic",
  price: 55,
  img: "https://images-na.ssl-images-amazon.com/images/I/41Y1OMN9XUL._SL200_SY260_CR0,0,200,260_.jpg",
  category: "Clothes sale"
},
{
  id:21,
  name: "Vans Men's Classic",
  price: 32,
  img: "https://images-na.ssl-images-amazon.com/images/I/41oYL8aoVvL._SL200_CR0,0,200,260_.jpg",
  category: "Clothes"
},
{
  id:22,
  name: "CHEERIOS Chocolate",
  price: 2,
  img: "https://m.media-amazon.com/images/I/816s9s1J9EL._AC_UL320_.jpg",
  category: "Food sale"
},

]



/*-------Insert product--------*/

let row=document.getElementById("row")
product.forEach(product => {
  row.innerHTML +=`<div class="column new ${product.category} ">
                         <div class="card">
                            <img src="${product.img}">
                            <h1 class="name">${product.name}</h1>
                            <p class="price">$ ${product.price}</p>
                            <p class="description">aaaaaaaa</p>
                            <button type="button" class="btn btn-primary btn-lg" id="addcart" onclick="addIntoCart(${product.id})">Add to Cart</button>
                          </div>
                    </div>`
});
/*-------End Of insert product--------*/


/*---------On Page Load-----------*/
window.addEventListener('load', (event) => {
  filterSelection("new")
  var sessionStore=sessionStorage.id;
  if(sessionStore!=null){
    document.getElementById("login").style.display="none";
   document.getElementById("username-login").innerHTML += sessionStorage.id;
   document.getElementById("cart").style.display="block";
  }  
  if(sessionStorage.login)
  {document.getElementById("logout").style.display="block";}
});
/*-------------End of Page Load---------------  */


/*---------On Page Refresh------------- */

window.addEventListener('refresh', (event) => {
  let sessionStore=sessionStorage.id;
  if(sessionStore!=null){
    document.getElementById("login").style.display="none";
   document.getElementById("username-login").innerHTML += sessionStorage.id;
   document.getElementById("cart").style.display="block";  
   filterSelection("new");   
  }
  console.log(sessionStorage.login)
  
});
/*---------End of Page Refresh------------ */


/*----------Filter of Product---------------- */

function filterSelection(c){
    let x = document.getElementsByClassName("column");
    for (let i = 0; i < x.length; i++) {
      let findClass=x[i];
      
      if(findClass.classList.contains(c))
      {
        findClass.style.display="block";
      }
      else
      {
        findClass.style.display="none";
      }           
    }
}

/*-----------------End of Filter-----------------*/




  // // Add active class to the current button (highlight it)


  // var btnContainer = document.getElementsByClassName("myBtnContainer");
  // var btns = btnContainer.getElementsByClassName("btn");
  // console.log(btn)
  // for (var i = 0; i < btns.length; i++) 
  // {
  //     btns[i].addEventListener("click", function(){
  //     var current = document.getElementsByClassName("active");
  //     current[0].className = current[0].className.replace(" active", "");
  //     this.className += " active";
  //   });
  // }

//---------------------------For searching----------------------------- 
function myFunction() {
  var input, filter, ul, div, h1,p,p1,  txtValue,txtValue1,txtValue2;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName("column");
  
  for (let i = 0; i < div.length; i++) 
  {
      h1 = document.getElementsByClassName("name");
      txtValue = h1[i].textContent || h1[i].innerText;
      
      p = document.getElementsByClassName("price");
      txtValue1 = p[i].textContent || p[i].innerText;

      p1 = document.getElementsByClassName("description");
      txtValue2 = p1[i].textContent || p1[i].innerText;

      if ((txtValue.toUpperCase().indexOf(filter) > -1) || (txtValue1.toUpperCase().indexOf(filter) > -1) || (txtValue2.toUpperCase().indexOf(filter) > -1))
       {
        div[i].style.display = "block";
      } else {
        div[i].style.display = "none";
      }
  }
  return false;
}
//-------------------------End of Serching-----------------------------



// --------------login Form---------------------
 var btn=document.getElementById("login").addEventListener("click", loginpop_up);
var loginModal = document.getElementById("myModal");
// When the user clicks the button, open the modal 
 function loginpop_up() {
  loginModal.style.display = "block";
}

// -----------end  Login Form----------------






/*---------Cart Js---------------*/

var cart=document.getElementById("cart").addEventListener("click", cartpop_up);
var cartModal = document.getElementById("cart-myModal");


// When the user clicks the button, open the modal 
 function cartpop_up() {
  
  if(!sessionStorage.login){
    document.getElementById("myModal").style.display="block"  
  }
  else if(itemCounter==0){
      alert("Cart is empty");
  }
  else{
    cartModal.style.display = "block";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
      if ((event.target == cartModal) )
       {
        cartModal.style.display = "none";
      }                                                                                                                                                
 
         if (!(event.target.matches("#login") || event.target.matches(".wrapper-login") || $(event.target).parents(".wrapper-login").length) && (event.target !=document.getElementById("cart") && (event.target != document.getElementById("cartIcon")) ) ) {
         loginModal.style.display = "none";
        } 
}
/*--------End Cart Js-----------*/


/*----------Login Process---------------- */
const user=[
  {
    name:"Keyurkumar",
    id:"keyurkumar",
    password:"123"
  },
  {
    name:"Urvishkumar",
    id:"urvishkumar",
    password:"abc"
  },
];

function login_process(){
  event.preventDefault();  
  var userid=document.getElementById("userid").value
  var password=document.getElementById("password").value
  let login_flag = false;
  for(let i=0;i<user.length;i++){ 
    var displayCart=document.getElementsByClassName('cart');
    if(!login_flag && user[i]["id"] == userid && user[i]["password"]==password)
    {
      
      sessionStorage.id=user[i]["id"];
      sessionStorage.login=true;
      sessionStorage.setItem('username',user[i]["id"]);
      loginModal.style.display = "none";
      document.getElementById("login").style.display="none";
      document.getElementById("username-login").innerHTML += sessionStorage.id;      
      document.getElementById("logout").style.display="block";
      login_flag=true;
      break;
    }   
  }
  if(!login_flag)
  {
    alert("Please Enter Correct Usernaame and Password");
    var userid=document.getElementById("userid").value="";
    var password=document.getElementById("password").value="";
  }
  return false;
}

/*----------End Login Process---------------- */




/*-------------Add into Cart---------------------*/ 
var itemCounter=0;
var totalPrice=0;
function addIntoCart(id){
   
    itemCounter++;
    var cartItem=document.querySelector(".cart-item");  
    document.querySelector(".item-count").innerHTML =itemCounter;
    product.forEach(element => {
          if(id==element.id)
        {
          cartItem.innerHTML +=` <div class="product-details">
                                  <span class="close" onclick="remove(this)">&times;</span>
                                  <h2>${element.name}</h2>
                                  <hr>
                                  <h2>${element.price}</h2>
                                </div>`;
                                totalPrice = totalPrice + element.price ;
                                document.querySelector(".cart-total").innerHTML =`Grand Total :- ${totalPrice}`;
        }
    });      
    
}

/*------------End of Add into Cart------- */

/*------------Remove From cart----------- */
const remove = (event) =>{
  event.parentElement.remove();
  itemCounter--;
  let price=event.parentElement.lastChild.previousElementSibling
  console.log(price)
  totalPrice = totalPrice - parseInt(price.innerHTML);
  document.querySelector(".cart-total").innerHTML = `Grand Total :- ${totalPrice}`;
  

  document.querySelector(".item-count").innerHTML =itemCounter;
  if(itemCounter==0){
    cartModal.style.display = "none"; 
  }
}

/*------------End of remove from cart---------*/

/*-----------Logout------------------*/
function logout(){
  sessionStorage.clear();
  location.reload();
}
/*-----------End Logout-------------- */