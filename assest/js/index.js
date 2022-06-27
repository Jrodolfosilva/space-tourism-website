function menuHeader(){

        const menuList = document.querySelectorAll('#navbar > li')
        const sectionMenu = document.querySelectorAll('main>div')
        const body = document.querySelector('body')

        function bodyBg(index){
            const classes =["bg0","bg1","bg2","bg3"]
            classes.forEach((item)=>{
                body.classList.remove(item)
                body.classList.add(`bg${index}`)
            })
            
        }

        function show (index){
            sectionMenu.forEach((li)=>{
                li.classList.remove('ativo')
            })
            sectionMenu[index].classList.toggle('ativo')
        }

        menuList.forEach((li,index)=>{
            li.addEventListener('click',()=>{
                show(index)
                bodyBg(index)

            })
        })
}
menuHeader()


























function mobile (){
    const ativaMenu = document.querySelector(".menu_mobile > img")
    const menuMoblie = document.querySelector('.navbar_list');
   
    ativaMenu.addEventListener('click', ()=>{
        menuMoblie.classList.toggle('mobile')
    }) 





}
mobile()















function pinhao(index){
    const sectionDest = document.querySelectorAll('.destinaction > div')

    sectionDest.forEach((i)=>{
        i.classList.remove('ativo')
    })
    sectionDest[index].classList.toggle('ativo')
}

    function moon(){
        pinhao(0)
    }

    function mars(){
        pinhao(1)
    }

    function europa (){
        pinhao(2)
    }
    function titan (){
        pinhao(3)
    }
