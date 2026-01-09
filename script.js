// script.js - BURAYI DİLEDİĞİN GİBİ DÜZENLE
const deneyimHavuzu = [
    { resim: "d01.png", link: "https://instagram.com/p/1", platform: "Instagram", puan: "+10" },
    { resim: "d02.png", link: "https://instagram.com/p/2", platform: "Instagram", puan: "-10" },
    { resim: "d03.png", link: "https://facebook.com/1",   platform: "Facebook",  puan: "+15" },
    { resim: "d04.png", link: "https://facebook.com/2",   platform: "Facebook",  puan: "-15" },
    { resim: "d05.png", link: "https://youtube.com/1",    platform: "YouTube",   puan: "0" },
    { resim: "d01.png", link: "https://instagram.com/p/1", platform: "Instagram", puan: "+10" },
    { resim: "d02.png", link: "https://instagram.com/p/2", platform: "Instagram", puan: "-10" },
    { resim: "d03.png", link: "https://facebook.com/1",   platform: "Facebook",  puan: "+15" },
    { resim: "d04.png", link: "https://facebook.com/2",   platform: "Facebook",  puan: "-15" },
    { resim: "d05.png", link: "https://youtube.com/1",    platform: "YouTube",   puan: "0" },
    { resim: "d01.png", link: "https://instagram.com/p/1", platform: "Instagram", puan: "+10" },
    { resim: "d02.png", link: "https://instagram.com/p/2", platform: "Instagram", puan: "-10" },
    { resim: "d03.png", link: "https://facebook.com/1",   platform: "Facebook",  puan: "+15" },
    { resim: "d04.png", link: "https://facebook.com/2",   platform: "Facebook",  puan: "-15" },
    { resim: "d05.png", link: "https://youtube.com/1",    platform: "YouTube",   puan: "0" },
    { resim: "d01.png", link: "https://instagram.com/p/1", platform: "Instagram", puan: "+10" },
    { resim: "d02.png", link: "https://instagram.com/p/2", platform: "Instagram", puan: "-10" },
    { resim: "d03.png", link: "https://facebook.com/1",   platform: "Facebook",  puan: "+15" },
    { resim: "d04.png", link: "https://facebook.com/2",   platform: "Facebook",  puan: "-15" },
    { resim: "d05.png", link: "https://youtube.com/1",    platform: "YouTube",   puan: "0" },
    // Buraya d20'ye kadar istediğin kadar kart ekle...
];

// OYUN MANTIĞI (Buraya dokunman gerekmez)
const grid = document.getElementById('sonuc-grid');
if(grid) {
    // Havuzdan rastgele 5 kart seçer
    const secilenler = deneyimHavuzu.sort(() => 0.5 - Math.random()).slice(0, 5);
    
    secilenler.forEach(kart => {
        grid.innerHTML += `
            <div class="kart-kutu" onclick="kartAc(this, '${kart.link}')">
                <div class="kart-ic">
                    <div class="front"><img src="img/kart_arka.png"></div>
                    <div class="back">
                        <img src="img/${kart.resim}">
                        <div class="puan-tag ${kart.puan.includes('-') ? 'eksi' : 'arti'}">${kart.puan}</div>
                    </div>
                </div>
            </div>`;
    });
}

function kartAc(el, link) {
    el.classList.add('flipped'); // Kartı döndür
    setTimeout(() => { window.location.href = link; }, 1500); // 1.5 sn sonra siteye git
}