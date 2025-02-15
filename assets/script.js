const add_btn=document.querySelectorAll(".add_btn")
const product_name=document.querySelectorAll(".product_name")
const product_img=document.querySelectorAll(".product_img")
const product_price=document.querySelectorAll(".product_price")
const cart_contents=document.querySelector(".cart_contents")
const cart_contents_phrase=document.querySelector(".empty_phrase")
const basket_counter=document.querySelector(".basket_counter")
const price=document.querySelector(".price")
const products_array=JSON.parse(localStorage.getItem("product"))
let cart=(localStorage.getItem("cart"))?JSON.parse(localStorage.getItem("cart")):[]
let ident=0
let counter=(localStorage.getItem("counter"))?parseInt(localStorage.getItem("counter")):0
let total_price=(localStorage.getItem("total_price"))?parseFloat(localStorage.getItem("total_price")):0.00


const calculate_price=()=>{
    let prices=[]
    total_price=0.0
    cart.forEach(element=>{
        prices.push(`${element.price}`)
    })
    for (let i = 0; i < prices.length; i++) {
        total_price+=parseFloat(prices[i])
    }
    localStorage.setItem("total_price",total_price)
}

const read_from_cart=()=>{
    if (cart.length==0) {
        cart_contents_phrase.style.display="block"
        }
    else{cart_contents_phrase.style.display="none"}
    cart_contents.innerHTML=""
    cart.forEach(element => {
        cart_contents.innerHTML+=`
            <div class="product_in_cart">
                <div class="product_in_cart_img">
                    <img src=${element.image} alt="">
                </div>
                <span class="product_in_cart_name">${element.title}</span>
                <span class="product_in_cart_price">$${element.price}</span>
                <button class="trash_btn" onclick="remove(${element.id})"><i class="fa-sharp fa-solid fa-trash"></i></button>
            </div>`
    })
    basket_counter.innerHTML=counter
    calculate_price()
    price.innerHTML=`$${total_price}`
}

const remove=(id)=>{
    counter--
    cart=cart.filter(element=>{
        return(element.id!=id)
    })
    localStorage.setItem("cart",JSON.stringify(cart))
    localStorage.setItem("counter",counter)
    read_from_cart()
}

const add=(id)=>{
    counter++
    ident++
    products_array.forEach(element => {
        if (element.id==id) {
            cart.push({id:ident,image:`${element.image}`,title:`${element.title}`,price:`${element.price}`})
            read_from_cart()
        }
        })
    localStorage.setItem("cart",JSON.stringify(cart))
    localStorage.setItem("counter",counter)
}

document.addEventListener("DOMContentLoaded",()=>{
    products_array.forEach((element,index) => {
        product_name[index].innerHTML=`${element.title}`
        product_img[index].src=`${element.image}`
        product_price[index].innerHTML=`$${element.price}`
        add_btn[index].addEventListener("click",()=>{add(`${element.id}`)})
    })
    read_from_cart()
})