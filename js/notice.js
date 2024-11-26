window.addEventListener("load",function(){
    let popup_modal = this.document.querySelector(".popup_modal")
    let popup_check = this.document.querySelector(".popup_check")
    let btn_notice_delete = this.document.querySelector("#btn_notice_delete")
    let popup_btn_array = this.document.querySelectorAll(".popup_btn")

    btn_notice_delete.addEventListener("click",function(event){
        event.preventDefault()
        popup_modal.classList.add("on")
        popup_check.classList.add("on")
    })

    // 임시기능
    popup_btn_array.forEach(function(btn){
        btn.addEventListener("click",function(){
            popup_modal.classList.remove("on")
            popup_check.classList.remove("on")
        })
    })

    popup_modal.addEventListener("click",function(){
        popup_modal.classList.remove("on")
        popup_check.classList.remove("on")
    })
    
})