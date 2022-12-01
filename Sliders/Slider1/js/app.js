const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
});

const geNext = () =>{
    counter++;
    slideImage();
}

const gePrev = () =>{
    counter--;
    slideImage();
}

const slideImage = () => {
    if(counter>3){
        counter = 0
    }else if(counter <0){
        counter = 3
    }
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}
