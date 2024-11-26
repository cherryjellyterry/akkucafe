fetch('/head.html')
.then(Response => Response.text())
.then(data => {
    document.head.innerHTML += data
})
.catch(error => console.log("에러 : ", error))

fetch('/header.html')
.then(Response => Response.text())
.then(data => {
    document.querySelector(".header_wrap").innerHTML += data
    let btn_gnb = this.document.querySelector("#btn_gnb")
    let btn_close_gnb = this.document.querySelector("#btn_close_gnb")
    let hidden_gnb = this.document.querySelector(".hidden_gnb")
    let header = document.querySelector("header")
    
    btn_gnb.addEventListener("click",function(){
        hidden_gnb.classList.add("on")
    })

    btn_close_gnb.addEventListener("click",function(){
        hidden_gnb.classList.remove("on")
    })
    setTimeout(function(){
        header.style.transition = `all 0.6s ease 0s`
        hidden_gnb.style.transition = `all 0.6s ease 0s`
    },100)
    
})
.catch(error => console.log("에러 : ", error))

fetch('/footer.html')
.then(Response => Response.text())
.then(data => {
    document.querySelector("footer").innerHTML += data
})
.catch(error => console.log("에러 : ", error))

fetch('/fixed_menu.html')
.then(Response => Response.text())
.then(data => {
    document.querySelector(".fixed_menu").innerHTML += data

    let fixed_menu = this.document.querySelector(".fixed_menu")
    let lastScrollTop = 0
    let hideTimeout

    setTimeout(function(){
        fixed_menu.style.transition = `all 0.5s ease 0s`
    },100)

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

    

    // 관리자모드 열기
    let btn_admin = this.document.querySelector("#btn_admin")
    let btn_admin_img = this.document.querySelector("#btn_admin img")
    let design_ver = "client"

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
.catch(error => console.log("에러 : ", error))

window.addEventListener("load",function(){
    let popup_modal_js = this.document.querySelector(".popup_modal")
    let popup_check_js = this.document.querySelector(".popup_check")
    if(popup_modal_js){
        this.setTimeout(function(){
            popup_modal_js.style.transition = "all 0.5s ease 0s"
            popup_check_js.style.transition = "all 0.5s ease 0s"
        },100)
    }
    
})