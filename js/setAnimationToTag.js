// onload에 이렇게 넣으면 바로 실행된다.

// let flag = false
// window.addEventListener("scroll",function(){
//     setAnimationToTag(flag)
// })


function setDefaultStyle(classname){
    let tagArray = document.querySelectorAll(classname)
    if(classname == ".moveLtoR"){
        tagArray.forEach(function(tag){
            tag.style.transition = `all 0.8s ease 0s`
            tag.style.transform = `translateX(-20px)`
            tag.style.opacity = `0`
        })
    }else if(classname == ".moveRtoL"){
        tagArray.forEach(function(tag){
            tag.style.transition = `all 0.8s ease 0s`
            tag.style.transform = `translateX(20px)`
            tag.style.opacity = `0`
        })
    }
}

function setAnimationToTag(flag){

    
    if(!flag){
        setDefaultStyle(".moveLtoR")
        setDefaultStyle(".moveRtoL")
    }
    


    let viewHeight = window.innerHeight // 현재 브라우저 화면의 높이를 계산
    

    function animationDetailsetting(classname){
        let tagArray = document.querySelectorAll(classname)

        tagArray.forEach(function(tag){
            let distance = tag.getBoundingClientRect().top // 각각 태그의 뷰포트 상단에서부터의 거리

            if(distance < viewHeight*0.9){
                tag.style.transform = `translateX(0)`
                tag.style.opacity = `1`
            }else{
                tag.style.transform = `translateX(${classname==".moveLtoR"?"-20":"20"}px)`
                tag.style.opacity = `0`
            }
        })
    }
    animationDetailsetting(".moveLtoR")
    animationDetailsetting(".moveRtoL")

    return true
}