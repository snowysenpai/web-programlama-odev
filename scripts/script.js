var sayac = 0
var sayac1 = 0;
var pageLoadHrs = 0
var pageLoadMin = 0
var pageLoadSec = 0

var date = new Date

function darkMode() {
    var element = document.body
    if (sayac == 0) {
        element.classList.add("dark-mode")
        sayac++
        localStorage.setItem(`sayac`, sayac)
    }
    else {
        element.classList.remove("dark-mode")
        sayac = 0
        localStorage.setItem(`sayac`, sayac)
    }
    console.log(sayac)
}

function onLoad() {
    var element = document.body
    sayac = localStorage.getItem(`sayac`)
    if (sayac == 0) {
        element.classList.remove("dark-mode")
    }
    else if (sayac == 1) {
        element.classList.add("dark-mode")
    }
    console.log(sayac)
}

function timerStart() {

    setInterval(() => {
        pageLoadSec++
        if (pageLoadSec == 60) {
            pageLoadMin++
            pageLoadSec = 0
        }
        if (pageLoadMin == 60) {
            pageLoadHrs++
            pageLoadMin = 0
        }
        // console.log(`${pageLoadHrs}:${pageLoadMin}:${pageLoadSec}`)
    }, 1000);
}

function timerStop() {
    alert(`Sayfada ${pageLoadHrs} saat ${pageLoadMin} dakika ${pageLoadSec} saniye durdunuz`)
}


function yoreselUrunleriIncele() {
    var fotolar = document.querySelectorAll("img")

    for (var i = 0;i<fotolar.length; i++){
        fotolar[i].addEventListener("mouseover", () => {
            sayac1++
            console.log(sayac1)
            if (sayac1 >= 9) {
                alert("Tüm ürünleri incelediniz 🙂")
                sayac1 = null
            }
        })
    }
}

function iletisim() {
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var email = document.getElementById("email").value
    var message = document.getElementById("message").value
    alert(`İsim: ${name}\nSoyisim: ${surname}\nE-Mail ${email}\n\nMesajı:\n\n${message}`)
}
