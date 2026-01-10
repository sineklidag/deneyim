// script.js - VERİ TABANI VE OYUN MANTIĞI
const deneyimHavuzu = [
    // --- TWITTER (X) BAĞLANTILARI ---
    { resim: "d01.png", link: "https://x.com/kesanlig?s=21", platform: "X", puan: "+20" },
    { resim: "d02.png", link: "https://x.com/smet1562002?s=21", platform: "X", puan: "+10" },
    { resim: "d03.png", link: "https://x.com/melahat24998", platform: "X", puan: "+10" },
    { resim: "d04.png", link: "https://x.com/Samet1069691", platform: "X", puan: "+15" },
    { resim: "d05.png", link: "https://x.com/Rustem5234", platform: "X", puan: "-10" },

    // --- INSTAGRAM BAĞLANTILARI ---
    { resim: "d06.png", link: "https://www.instagram.com/p/DTEKmoBDFNS/", platform: "Instagram", puan: "-15" },
    { resim: "d07.png", link: "https://www.instagram.com/p/DTEIbZrDEHz/", platform: "Instagram", puan: "0" },
    { resim: "d08.png", link: "https://www.instagram.com/p/DTED0XeDOUA/", platform: "Instagram", puan: "+20" },
    { resim: "d09.png", link: "https://www.instagram.com/p/DTEAzmgDBwP/", platform: "Instagram", puan: "-20" },
    { resim: "d10.png", link: "https://www.instagram.com/p/DTDxBDTDDOh/", platform: "Instagram", puan: "+10" },
    { resim: "d11.png", link: "https://www.instagram.com/p/DTDh_a8jEUI/", platform: "Instagram", puan: "-5" },
    { resim: "d12.png", link: "https://www.instagram.com/p/DTBy2UhjEvJ/", platform: "Instagram", puan: "0" },
    { resim: "d13.png", link: "https://www.instagram.com/p/DTBt913DI7A/", platform: "Instagram", puan: "+15" },
    { resim: "d14.png", link: "https://www.instagram.com/p/DTBnzeBDJ4N/", platform: "Instagram", puan: "-10" },
    { resim: "d15.png", link: "https://www.instagram.com/p/DTBcFzYDI9v/", platform: "Instagram", puan: "+5" },

    // --- TIKTOK BAĞLANTILARI ---
    { resim: "d16.png", link: "https://www.tiktok.com/@sineklidag/video/7592761557008813332", platform: "TikTok", puan: "+10" },
    { resim: "d17.png", link: "https://www.tiktok.com/@sineklidag/video/7592761962371501332", platform: "TikTok", puan: "0" },
    { resim: "d18.png", link: "https://www.tiktok.com/@sineklidag/video/7592762275459632405", platform: "TikTok", puan: "-15" },
    { resim: "d19.png", link: "https://www.tiktok.com/@sineklidag/video/7593549874382114068", platform: "TikTok", puan: "+5" },
    { resim: "d20.png", link: "https://www.tiktok.com/@sineklidag/video/7593550282559245588", platform: "TikTok", puan: "+15" },
    { resim: "d21.png", link: "https://www.tiktok.com/@sineklidag/video/7593551951573388564", platform: "TikTok", puan: "-10" },
    { resim: "d22.png", link: "https://www.tiktok.com/@sineklidag/video/7593552157127970068", platform: "TikTok", puan: "+20" },
    { resim: "d23.png", link: "https://www.tiktok.com/@sineklidag/video/7593552863641472276", platform: "TikTok", puan: "0" },
    { resim: "d24.png", link: "https://www.tiktok.com/@sineklidag/video/7593555382090403092", platform: "TikTok", puan: "+10" }
];

// KARTLARI YÜKLEME VE KARIŞTIRMA FONKSİYONU
function kartlariYukle() {
    const grid = document.getElementById('sonuc-grid');
    if(!grid) return;

    grid.innerHTML = ""; // Mevcut kartları temizle

    // Havuzu karıştır ve 5 adet seç
    const secilenler = [...deneyimHavuzu].sort(() => 0.5 - Math.random()).slice(0, 5);
    
    secilenler.forEach(kart => {
        // Puan rengini belirle
        let puanSinifi = "notr";
        if (kart.puan.includes('+')) puanSinifi = "arti";
        else if (kart.puan.includes('-')) puanSinifi = "eksi";

        grid.innerHTML += `
            <div class="kart-kutu" onclick="kartAc(this, '${kart.link}')">
                <div class="kart-ic">
                    <div class="front"><img src="img/kart_arka.png"></div>
                    <div class="back">
                        <img src="img/${kart.resim}" onerror="this.src='https://via.placeholder.com/150x220?text=${kart.platform}'">
                        <div class="puan-tag ${puanSinifi}">${kart.puan}</div>
                    </div>
                </div>
            </div>`;
    });
}

function kartAc(el, link) {
    if(el.classList.contains('flipped')) return; 
    el.classList.add('flipped'); 
    setTimeout(() => { window.location.href = link; }, 1500); 
}

// Sayfa ilk açıldığında kartları otomatik yükle
document.addEventListener('DOMContentLoaded', kartlariYukle);