const gifImages = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODNpcW91YjAzdTVncXFxbWZqaGx0cW03YXdyNG9oZzNuZTd3NGtuZSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KztT2c4u8mYYUiMKdJ/200.webp",
    "https://media3.giphy.com/media/gEap0zGa2Wcyv1pwf6/giphy.webp?cid=790b7611acdjlkazeif3enoe75bzvyqper1sj18ka086j49m&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media4.giphy.com/media/jUTHzkkD3Rsfrm6W4p/giphy.webp?cid=790b7611acdjlkazeif3enoe75bzvyqper1sj18ka086j49m&ep=v1_gifs_search&rid=giphy.webp&ct=g",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYThleXJyZ2xjYmJqcmsxc2JjbXM5andqdWV0c3ZqdmJqaXRpZGd6biZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JTbsN6f3FDafoQZkpy/giphy.webp"
];

let currentIndex = 0;
const gifElement = document.getElementById("gifImage");

setInterval(() => {
    currentIndex = (currentIndex + 1) % gifImages.length;
    gifElement.src = gifImages[currentIndex];
}, 1000); 
