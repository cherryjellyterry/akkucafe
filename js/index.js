window.addEventListener("load",function(){
    
    // // 히어로 슬라이드
    // let count = 0
    // let train_hero = this.document.querySelector(".train_hero")
    // let pagi_hero_array = this.document.querySelectorAll(".pagi_hero>span")

    // this.setInterval(function(){
    //     count++
    //     if(count>2){count=0}
    //     train_hero.style.transform=`translateX(${-(100/3)*count}%)`
    //     for(let j = 0; j<pagi_hero_array.length;j++){
    //         pagi_hero_array[j].classList.remove("on")
    //     }
    //     pagi_hero_array[count].classList.add("on")
    // },5000)

    // for(let i = 0; i<pagi_hero_array.length; i++){
    //     pagi_hero_array[i].addEventListener("click",function(){
    //         train_hero.style.transform = `translateX(${-(100/3)*i}%)`
    //         for(let k = 0; k<pagi_hero_array.length; k++){
    //             pagi_hero_array[k].classList.remove("on")
    //         }
    //         pagi_hero_array[i].classList.add("on")
    //         count=i;
    //     })
    // }

    const swiper1 = new Swiper('.station_hero1', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          },
        autoplay: true,
        speed : 1000,
        autoHeight: true,
        
    });

    const swiper2 = new Swiper('.station_hero2', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
            clickable: true,
          },
        autoplay: true,
        speed : 1000,
        autoHeight: true,
        
    });

    const swiper3 = new Swiper('.station3', {
        loop: true,
        autoplay:true,
        effect: "fade",
    });

    const swiper4 = new Swiper('.station4', {
        loop:true,
    });

    swiper3.on('slideChange', function(){
        swiper4.slideToLoop(swiper3.realIndex)
    })

    // // 시그니처 슬라이드

    // let zahl = 0
    // let signiture_train_array = this.document.querySelectorAll(".signiture_train>li")
    // let sig_pagi = this.document.querySelectorAll(".signiture_pagi>span")

    // this.setInterval(function(){
    //     zahl++
    //     if(zahl>2){zahl=0}
    //     for(let q = 0; q<signiture_train_array.length; q++){
    //         signiture_train_array[q].classList.remove("on")
    //     }
    //     signiture_train_array[zahl].classList.add("on")
    //     for(let k = 0; k<sig_pagi.length; k++){
    //         sig_pagi[k].classList.remove("on")
    //     }
    //     sig_pagi[zahl].classList.add("on")
    // },5000)

    // for(let w = 0; w<sig_pagi.length; w++){
    //     sig_pagi[w].addEventListener("click",function(){
    //         for(let q = 0; q<signiture_train_array.length; q++){
    //             signiture_train_array[q].classList.remove("on")
    //         }
    //         signiture_train_array[w].classList.add("on")
    //         for(let k = 0; k<sig_pagi.length; k++){
    //             sig_pagi[k].classList.remove("on")
    //         }
    //         sig_pagi[w].classList.add("on")
    //         zahl=w;
    //     })
    // }
})