const info = document.querySelector('.about_sec_item')
const infoOpen = document.querySelector('.show_all_informarion_link')
const closeBtn = document.querySelector('.close_btn')

const bodySec   = document.body;

if(info && infoOpen) {
    infoOpen.addEventListener('click', () =>{
        info.classList.add('shown')
        bodySec.classList.add('lock')
    })
    closeBtn.addEventListener('click', () =>{
        info.classList.remove('shown')
        bodySec.classList.remove('lock')
    })
}