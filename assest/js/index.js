function menuHeader(){

        const menuList = document.querySelectorAll('#navbar > li')
        const sectionMenu = document.querySelectorAll('main>div')


        function show (index){
            
            sectionMenu.forEach((li)=>{
                li.classList.remove('ativo')
            })
            sectionMenu[index].classList.toggle('ativo')
        }

        menuList.forEach((li,index)=>{
            li.addEventListener('click',()=>{
                show(index)
            })
        })
}
menuHeader()


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
