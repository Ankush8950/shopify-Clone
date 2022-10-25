let myvideo = document.querySelector('#myvideo')
let playbtn = document.getElementById('playbtn')
let pausebtn = document.getElementById('pausebtn')
let menu = document.querySelector('#menu')
let showpage = document.querySelector("#show_page")
let shownav = document.querySelector('#showpage')
let scrolltopbtn = document.getElementById('scrolltopbtn')
let closenavbtn = document.getElementById('closenavbtn')

let isvideplay = false

function playpaused() {
    if(!isvideplay){
        myvideo.play()
        isvideplay = true
        pausebtn.classList.toggle('hidden')
        playbtn.classList.toggle('active')
    }
    else{
        myvideo.pause();
        isvideplay = false
        playbtn.classList.toggle('active')
        pausebtn.classList.toggle('hidden')
    }
}

playbtn.addEventListener('click',playpaused)


// hamberger
// let open = false
menu.addEventListener('click',function(){
        showpage.classList.toggle('hidden')
        shownav.classList.toggle('hidden')
})
closenavbtn.addEventListener('click',function(){
    showpage.classList.toggle('hidden')
    shownav.classList.toggle('hidden')
})

// navbar top fixed 
window.addEventListener('scroll',function(){
   let navbar = document.querySelector('#navbar')
    navbar.classList.toggle('sticky',window.screenY > 0)
    // navbar.style.backgroundColor = 'red' 
    // console.log(navbar);
})

// scroll button move  to top
window.onscroll = function() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        scrolltopbtn.style.display = 'block'

    }else{
        scrolltopbtn.style.display = 'none'
    }
}

scrolltopbtn.addEventListener('click',function(){
     window.scrollTo({
         top: 400,
         behavior: 'smooth',
     })
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

