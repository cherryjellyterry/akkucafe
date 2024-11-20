window.addEventListener("load",function(){

    let faq_li_array = this.document.querySelectorAll(".faq>li")
    let faq_h4_array = this.document.querySelectorAll(".faq>li>h4")
    let faq_img_array = this.document.querySelectorAll(".faq>li>h4>img")

    faq_li_array.forEach(function(faq,index){
        faq.addEventListener("click",function(){
            if(faq.classList.contains('on')){
                for(let i=0;i<faq_li_array.length;i++){
                    faq_li_array[i].classList.remove("on")
                }
                for(let k=0;k<faq_h4_array.length;k++){
                    faq_h4_array[k].classList.remove("on")
                    faq_img_array[k].setAttribute("src","./img/blackQ.png")
                }
            }else{
                for(let i=0;i<faq_li_array.length;i++){
                faq_li_array[i].classList.remove("on")
                }
                faq.classList.add("on")
                for(let k=0;k<faq_h4_array.length;k++){
                    faq_h4_array[k].classList.remove("on")
                    faq_img_array[k].setAttribute("src","./img/blackQ.png")
                }
                faq_h4_array[index].classList.add("on")
                faq_img_array[index].setAttribute("src","./img/redQ.png")
            }
        })
    })
})