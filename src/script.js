const show = document.querySelector('.show')
show.addEventListener('click', function(){
    const textDescription = document.querySelector('.text-description')
    textDescription.classList.remove('hidden')
})
textDescription.classList.add('hidden')
