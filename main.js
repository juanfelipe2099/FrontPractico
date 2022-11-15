const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')
    
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');


   

}
     
const productList = [];
productList.push({
    name: 'Barrel Brewing',
    price: 2.00,
    image: 'https://images.unsplash.com/photo-1559180786-c6f26acc1111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" class="product-img',
});
productList.push({
    name: 'Strong Bear',
    price: 4.00,
    image: 'https://images.unsplash.com/photo-1633710734156-a33cd91d7ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" class="product-img',
});
/*
<div class="product-card">
                <img src="https://images.unsplash.com/photo-1559180786-c6f26acc1111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" class="product-img">
                <div class="product-info">
                    <div>
                        <p>$1.200</p>
                        <p>Barrel Brewing</p>
                    </div>
                    <figure>
                        <img src="./iconos/Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
*/

for(product of productList){
    document.createElement('')
}