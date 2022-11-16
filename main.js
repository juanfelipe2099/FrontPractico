const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productoDetailContainer = document.querySelector('.product-detail-select')
const productoDetailClose = document.querySelector('.product-detail-select-close');

menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productoDetailClose.addEventListener('click',closeProductDetail);

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

    closeProductDetail();
}


function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
    
    const isProductDetailClose = productoDetailContainer.classList.contains('inactive')
    
    if(!isProductDetailClose){
        productoDetailContainer.classList.add('inactive');
    }

}
     
const productList = [];
productList.push({
    name: 'Barrel Brewing',
    price: 2.99,
    image: 'https://images.unsplash.com/photo-1559180786-c6f26acc1111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" class="product-img',
});
productList.push({
    name: 'Strong Bear',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1633710734156-a33cd91d7ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" class="product-img',
});


function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetail)
     
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
     
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        
        const imgFigure = document.createElement('img');
        imgFigure.setAttribute('src','./iconos/Platzi_YardSale_Icons/bt_add_to_cart.svg');
         
         productInfoFigure.appendChild(imgFigure);
         productInfo.appendChild(productInfoDiv);
         productInfo.appendChild(productInfoFigure);
         productCard.appendChild(productImg);
         productCard.appendChild(productInfo);
     
         cardsContainer.appendChild(productCard);
     
     
     }
}

function openProductDetail() {
    aside.classList.add('inactive')

    productoDetailContainer.classList.remove('inactive');
}

function closeProductDetail(){
    productoDetailContainer.classList.add('inactive');
}


renderProducts (productList);
