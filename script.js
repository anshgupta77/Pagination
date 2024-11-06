let link = document.querySelectorAll('.link');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let currentvalue=1;

function activeLink(){
    // console.log("helloo");
    
    for(l of link){
        l.classList.remove('active');
    }
    event.target.classList.add('active');
    currentvalue = event.target.value;
    styleBtn();
}
function backBtn(){
    console.log(currentvalue);
    
    if(currentvalue > 1){
        for(l of link){
            l.classList.remove("active");
        }
        currentvalue--;
        styleBtn();
        link[currentvalue-1].classList.add("active");
    }
}
function nextBtn(){
    console.log(currentvalue);
    if(currentvalue < 6){
        for(l of link){
            l.classList.remove("active");
        }
        currentvalue++;
        styleBtn();
        link[currentvalue-1].classList.add("active");
    }
}
function styleBtn(){
    if(currentvalue == 1){
        prev.style.display = "none";
    }else{
        prev.style.display = "inline";
    }
    if(currentvalue == 6){
        next.style.display = "none";
    }else{
        next.style.display = "inline";
    }
}