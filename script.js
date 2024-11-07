let link = document.querySelectorAll('.link');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let first = document.getElementById('first');
let second  = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');
let sixth = document.getElementById("sixth");
let currentvalue = 1;

// Simulate a large dataset
const data = [
    "Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Oliver", "Sophia",
    "Benjamin", "Charlotte", "Elijah", "Amelia", "Lucas", "Mia", "Mason", "Harper", "Logan", "Evelyn",
    "Alexander", "Abigail", "Ethan", "Emily", "Jacob", "Ella", "Michael", "Avery", "Daniel", "Scarlett",
    "Henry", "Grace", "Jackson", "Chloe", "Sebastian", "Lily", "Aiden", "Sofia", "Matthew", "Madison",
    "Samuel", "Aria", "David", "Aubrey", "Joseph", "Zoe", "Carter", "Hannah", "Owen", "Luna",
    "Wyatt", "Layla", "John", "Ellie", "Jack", "Nora", "Luke", "Riley", "Jayden", "Lillian",
    "Dylan", "Addison", "Levi", "Willow", "Isaac", "Lucy", "Gabriel"
];


function activeLink() {
    for (let l of link) {
        l.classList.remove('active');
    }
    event.target.classList.add('active');
    currentvalue = parseInt(event.target.textContent); // Get the page number from the clicked element
    displayData();
    styleBtn();
}

function backBtn() {
    if (currentvalue > 1) {
        currentvalue--;
        displayData();
        styleBtn();
        updateActiveLink();
            first.innerHTML = currentvalue;
            second.innerHTML = currentvalue+1;
            third.innerHTML = currentvalue+2;
            fourth.innerHTML = currentvalue+3;
            fifth.innerHTML = currentvalue+4;
            sixth.innerHTML = currentvalue+5;
    }
}

function nextBtn() {
    if (currentvalue < Math.ceil(data.length / 10)) {
        currentvalue++;
        displayData();
        styleBtn();
        updateActiveLink();
        if(currentvalue >= 7){
            sixth.innerHTML = currentvalue;
            fifth.innerHTML = currentvalue-1;
            fourth.innerHTML = currentvalue-2;
            third.innerHTML = currentvalue-3;
            second.innerHTML = currentvalue-4;
            first.innerHTML = currentvalue-5;
        }
    }
}

// Display data based on the current page
function displayData() {
    const startIndex = (currentvalue - 1) * 10;
    const endIndex = startIndex + 10;
    const pageData = data.slice(startIndex, endIndex);

    const container = document.querySelector('.data-container');
    container.innerHTML = pageData.map((item,index) => `<p>${startIndex+index+1}.${item}</p>`).join('');
}

function updateActiveLink() {
    for (let l of link) {
        l.classList.remove('active');
    }
    if (currentvalue <= 6) {
        link[currentvalue - 1].classList.add('active');
    }
    else{
        link[5].classList.add('active');
    }
}

function styleBtn() {
    prev.style.display = currentvalue === 1 ? "none" : "inline";
    next.style.display = currentvalue === Math.ceil(data.length / 10) ? "none" : "inline";
}

// Initial display
displayData();
styleBtn();

// snippet1
// let link = document.querySelectorAll('.link');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// let currentvalue=1;

// function activeLink(){
//     // console.log("helloo");
    
//     for(l of link){
//         l.classList.remove('active');
//     }
//     event.target.classList.add('active');
//     currentvalue = event.target.value;
//     styleBtn();
// }
// function backBtn(){
//     console.log(currentvalue);
    
//     if(currentvalue > 1){
//         for(l of link){
//             l.classList.remove("active");
//         }
//         currentvalue--;
//         styleBtn();
//         link[currentvalue-1].classList.add("active");
//     }
// }
// function nextBtn(){
//     console.log(currentvalue);
//     if(currentvalue < 6){
//         for(l of link){
//             l.classList.remove("active");
//         }
//         currentvalue++;
//         styleBtn();
//         link[currentvalue-1].classList.add("active");
//     }
// }
// function styleBtn(){
//     if(currentvalue == 1){
//         prev.style.display = "none";
//     }else{
//         prev.style.display = "inline";
//     }
//     if(currentvalue == 6){
//         next.style.display = "none";
//     }else{
//         next.style.display = "inline";
//     }
// }