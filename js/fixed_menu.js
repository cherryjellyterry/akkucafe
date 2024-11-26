window.addEventListener("load",function(){
    
    let fixed_menu = this.document.querySelector(".fixed_menu")
    let lastScrollTop = 0
    let hideTimeout

    this.window.addEventListener("scroll",function(){
        // 스크롤 했을 때 실행되는 동작
        
        let scrollTop = this.document.documentElement.scrollTop 
        // 위에서 스크롤바가 얼만큼 내려왔는지 계산하여 변수에 저장

        if(scrollTop < lastScrollTop){
            // 마우스 휠을 위로 올렸을 때 
            fixed_menu.classList.add("on")

            // 브라우저 성능을 위해 이미 존재하는 타이머예약을 제거(있다면)
            if(hideTimeout){
                this.clearTimeout(hideTimeout)
            }

            // 3초 뒤에 메뉴 사라지게
            hideTimeout = this.setTimeout(function(){
                fixed_menu.classList.remove("on")
            },3000)
        }else{
            // 마우스 휠을 아래로 내렸을 때
            fixed_menu.classList.remove("on")
        }

        lastScrollTop = scrollTop
    })

    // 마우스 올리고있는동안 메뉴사라지는 기능을 취소하는 기능
    fixed_menu.addEventListener("mouseover",function(){
        clearTimeout(hideTimeout)
    })
    fixed_menu.addEventListener("mouseout",()=>{
        // function(){} 대신 ()=>{}을 사용하면 this가 fixed_menu가 되는게 아니고 window까지 가서 this가 됨.
        // 아니면 그냥 setTimeout 앞에 있는 this를 빼도 됨.
        hideTimeout = setTimeout(function(){
            fixed_menu.classList.remove("on")
        },3000)
    })

    // 위로 올려보내기
    let btn_top = this.document.querySelector("#btn_top")
    btn_top.addEventListener("click",function(event){
        event.preventDefault()
        window.scrollTo({top:0,behavior:"smooth"})
    })



    let design_ver = "client"
    

    // 관리자모드 열기
    let btn_admin = this.document.querySelector("#btn_admin")
    let btn_admin_img = this.document.querySelector("#btn_admin img")
    btn_admin.addEventListener("click",function(event){
        event.preventDefault()

        if(design_ver == "client"){
            document.body.classList.add("admin")
            btn_admin_img.setAttribute("src","/img/admin_to_user.svg")
            btn_admin_img.setAttribute("title","유저모드로 돌아가기")
            design_ver = "admin"
        }else{
            // 유저모드로 돌아가기
            document.querySelector("body").classList.remove("admin")
            btn_admin_img.setAttribute("src","/img/admin_icon.svg")
            btn_admin_img.setAttribute("title","유저모드로 돌아가기")
            design_ver = "client"
        }

    })
})