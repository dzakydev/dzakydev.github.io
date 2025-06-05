function getJson() {
return fetch('pizza.json')
        .then(response => response.json())
        .then(response => {
            const menu = response.menu;
            let cards = '';
            menu.forEach(m => cards += showCards(m));
            const container = document.querySelector('.container-card');
            container.innerHTML = cards;
        });
};

getJson();

const links = document.querySelectorAll('.nav-link');
links.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        links.forEach(function(l) {
            l.classList.remove('active');
        });
        this.classList.add('active');

        const isi = link.innerHTML;
        const h1 = document.querySelector('h1');
        h1.innerHTML = isi;

        if (isi == "All Menu") {
            getJson();
        }

        let cards = '';
        fetch('pizza.json')
        .then(response => response.json())
        .then(response => {
            const menu = response.menu;
            menu.forEach(function(m) {
                if (isi == m.kategori) {
                    cards += showCards(m);
                    const container = document.querySelector('.container-card');
                    container.innerHTML = cards;
                }
            }); 
        });
    });
});

function showCards(m) {
    return `<div class="card p-3 my-3" style="width: 18rem;">
                <img src="/frontendProject/webProject/Food/img/${m.gambar}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${m.nama}</h5>
                    <p class="card-text">${m.deskripsi}</p>
                    <p class="card-text">Rp. ${m.harga}</p>
                    <a href="#" class="btn btn-primary btn-cards">Lihat Detail</a>
                </div>
            </div>`;
};

// // Search
// const input = document.querySelector('input');
// const buttonInp = document.querySelector('.btn-input');
// buttonInp.addEventListener('click', function() {
    
// });