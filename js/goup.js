window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
        .classList.add('show')
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show')        
    }
}


function subirTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

document.querySelector('.go-top-container').addEventListener('click' , subirTop) 