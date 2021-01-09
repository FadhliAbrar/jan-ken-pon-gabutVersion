const hasilGambar = document.querySelector('.hasil');
const tombol = document.querySelectorAll('.tombol');

function hasilSuit(a) {
    const random = Math.random()*10;
    if (random < 3.33){
        hasilGambar.setAttribute("src", "1.jpeg");
        if (a.classList.contains('kertas')) {
            alert('menang');
        }else if(a.classList.contains('batu')){
            alert('draw')
        }else{
            alert('Kalah')
        }
    }
    else if( random <6.66){
        hasilGambar.setAttribute("src", "2.jpg");
        if (a.classList.contains('batu')) {
            alert('menang');
        }else if(a.classList.contains('gunting')){
            alert('draw')
        }else{
            alert('Kalah')
        }
    }
    else{
        hasilGambar.setAttribute("src", "3.jpg");
        if (a.classList.contains('gunting')) {
            alert('menang');
        }else if(a.classList.contains('kertas')){
            alert('draw')
        }else{
            alert('Kalah')
        }
    }
}

tombol.forEach(e=>{
    e.addEventListener('click', a => hasilSuit(a.target) )
})