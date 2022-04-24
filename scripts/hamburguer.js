(()=>{
    const hamburguer=document.querySelector("#hamburguer-icon")
    const header=document.querySelector("header")
    const close=document.querySelector("#close-icon")
    hamburguer.addEventListener("click",()=>{
        header.classList.add("menu-mobile")
    })
    close.addEventListener("click",()=>{
        header.classList.remove("menu-mobile")
    })
})()