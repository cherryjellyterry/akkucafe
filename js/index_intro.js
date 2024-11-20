window.addEventListener("load",function(){
    let flag = false
    window.addEventListener("scroll",function(){
        flag = setAnimationToTag(flag)
    })
})