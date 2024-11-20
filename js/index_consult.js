window.addEventListener("load",function(){

    // 전화번호 입력란에 한글 못넣게 하기
    let number = this.document.querySelector("#number")

    number.addEventListener("input", function(){
        this.value = this.value.replace(/[^0-9+\-() ]/g, "");
    })
})