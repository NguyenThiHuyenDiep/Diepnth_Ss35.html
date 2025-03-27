const products=[
    {
        id: 1,
        name:'Laptop Dell XPS 15',
        price:35990000,
        image: 'https://th.bing.com/th/id/R.dd66a48254aca2d1e37b8887993a100c?rik=Ileg6QdLFs2iTA&pid=ImgRaw&r=0',
        description:'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.' ,
    },
    {
        id: 2,
        name:'iPhone 15 Pro Max',
        price:32990000,
        image:'https://th.bing.com/th/id/OIP.PO8M08Vxndz_455at0qGawHaFj?rs=1&pid=ImgDetMain',
        description:'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro',
    },
    {
        id: 3,
        name:'Samsung Galaxy S24 Ultra',
        price: 28990000,
        image:'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?rs=1&pid=ImgDetMain',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
        id: 4,
        name:'Tai nghe Sony WH-1000XM5',
         price: 7990000,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvWqI3nI09xz5AjndbJksN31NQHeGOsO6BiA&s',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
        id: 5,
        name:'Apple Watch Series 9',
        price: 11990000,
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=all',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hồ trợ thế thao.',
    },
    {
        id: 6,
        name:'Loa JBL Charge 5', 
        price: 3990000,
        image:'https://hoanghamobile.com/Uploads/2021/03/09/image-removebg-preview-6.png',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    },
]
let input=document.getElementById('input');
let btn=document.getElementById('btn');
let father=document.getElementById('father');
localStorage.setItem('products', JSON.stringify(products));
for(let i=0; i<products.length; i++){
    let divChild= document.createElement('div');
    divChild.id='child';
    divChild.innerHTML=`<img src="${products[i].image}">
        <p><b>${products[i].name}</b></p>
        <p>${products[i].description}</p>
        <p>${products[i].price} VND</p>
        <button>Buy</button>`
    father.appendChild(divChild);
}

btn.addEventListener('click',()=>{
    father.innerHTML=``;
    let text= input.value;
    input.value=''
    let find=products.filter((item)=>item.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()));
    console.log(find);
    if(find){
        for(let i=0; i<find.length; i++){
            let divChild= document.createElement('div');
            divChild.id='child';
            divChild.innerHTML=`<img src="${find[i].image}">
                <p><b>${find[i].name}</b></p>
                <p>${find[i].description}</p>
                <p>${find[i].price} VND</p>
                <button>Buy</button>`
            father.appendChild(divChild);
        }
    }
})
