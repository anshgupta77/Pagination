

//snippet 2

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let first = document.getElementById('first');
let second  = document.getElementById('second');
let third = document.getElementById('third');
let fourth = document.getElementById('fourth');
let fifth = document.getElementById('fifth');
let sixth = document.getElementById("sixth");
let paginationList = document.getElementById("pagination-list");
let currentvalue = 1;
// Simulate a large dataset
const data = [
    "Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Oliver", "Sophia",
    "Benjamin", "Charlotte", "Elijah", "Amelia", "Lucas", "Mia", "Mason", "Harper", "Logan", "Evelyn",
    "Alexander", "Abigail", "Ethan", "Emily", "Jacob", "Ella", "Michael", "Avery", "Daniel", "Scarlett",
    "Henry", "Grace", "Jackson", "Chloe", "Sebastian", "Lily", "Aiden", "Sofia", "Matthew", "Madison",
    "Samuel", "Aria", "David", "Aubrey", "Joseph", "Zoe", "Carter", "Hannah", "Owen", "Luna",
    "Wyatt", "Layla", "John", "Ellie", "Jack", "Nora", "Luke", "Riley", "Jayden", "Lillian",
    "Dylan", "Addison", "Levi", "Willow", "Isaac", "Lucy", "Gabriel",
    "Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Oliver", "Sophia",
    "Benjamin", "Charlotte", "Elijah", "Amelia", "Lucas", "Mia", "Mason", "Harper", "Logan", "Evelyn",
    "Liam", "Emma", "Noah", "Olivia", "William", "Ava", "James", "Isabella", "Oliver", "Sophia",
    "Benjamin"
];

paginationList.innerHTML = `
<li class="link active" onclick="activeLink()">1</li>
<li class="link " onclick="activeLink()">2</li>
<li class="link " onclick="activeLink()">3</li>
<li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${Math.ceil(data.length / 10)}</li>`;
let link = document.querySelectorAll('.link');
function activeLink() {
    for (let l of link) {
        l.classList.remove('active');
    }
    event.target.classList.add('active');
    currentvalue = parseInt(event.target.textContent); // Get the page number from the clicked element
    displayPagination();
    displayData();
    styleBtn();
}
function displayPagination() {
    if (currentvalue == 1) {
        paginationList.innerHTML = `
<li class="link active" onclick="activeLink()">1</li>
<li class="link " onclick="activeLink()">2</li>
<li class="link " onclick="activeLink()">3</li>
<li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${(Math.ceil(data.length / 10))}</li>`
    }
    else if (currentvalue == 2) {
        paginationList.innerHTML = `
<li class="link " onclick="activeLink()">1</li>
<li class="link active" onclick="activeLink()">2</li>
<li class="link " onclick="activeLink()">3</li>
<li class="link " onclick="activeLink()">4</li>
<li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${(Math.ceil(data.length / 10))}</li>`
    }
    else if (currentvalue == 3) {
        paginationList.innerHTML = `
<li class="link " onclick="activeLink()">${currentvalue-2}</li>
<li class="link " onclick="activeLink()">${currentvalue-1}</li>
<li class="link active" onclick="activeLink()">${currentvalue}</li>
<li class="link " onclick="activeLink()">${currentvalue+1}</li>
<li class="link " onclick="activeLink()">${currentvalue+2}</li>
<li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${(Math.ceil(data.length / 10)-2)}</li>`
    }
    else if (currentvalue > 3 && currentvalue < (Math.ceil(data.length / 10))) {
        paginationList.innerHTML = `
        <li class="link " onclick="activeLink()">1</li>
        <li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${currentvalue-2}</li>
<li class="link " onclick="activeLink()">${currentvalue-1}</li>
<li class="link active" onclick="activeLink()">${currentvalue}</li>
<li class="link " onclick="activeLink()">${currentvalue+1}</li>
<li class="link " onclick="activeLink()">${currentvalue+2}</li>
<li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${(Math.ceil(data.length / 10))}</li>`
    }
    else if (currentvalue == (Math.ceil(data.length / 10)-2)) {
        paginationList.innerHTML = `
<li class="link " onclick="activeLink()">1</li>
<li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${currentvalue-2}</li>
<li class="link " onclick="activeLink()">${currentvalue-1}</li>
<li class="link active" onclick="activeLink()">${currentvalue}</li>
<li class="link " onclick="activeLink()">${currentvalue+1}</li>
<li class="link " onclick="activeLink()">${currentvalue+2}</li>`
    }
    else if (currentvalue == (Math.ceil(data.length / 10)-1)) {
        paginationList.innerHTML = `
<li class="link " onclick="activeLink()">1</li>
<li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${currentvalue-2}</li>
<li class="link " onclick="activeLink()">${currentvalue-1}</li>
<li class="link active" onclick="activeLink()">${currentvalue}</li>
<li class="link " onclick="activeLink()">${currentvalue+1}</li>`
    }
    else {
        paginationList.innerHTML = `
<li class="link " onclick="activeLink()">1</li>
<li class="link " onclick="activeLink()">.....</li>
<li class="link " onclick="activeLink()">${currentvalue-2}</li>
<li class="link " onclick="activeLink()">${currentvalue-1}</li>
<li class="link active" onclick="activeLink()">${currentvalue}</li>`

    }
// Simulate a large dataset

}
function backBtn() {
    if (currentvalue > 1) {
        currentvalue--;
        displayPagination();
        displayData();
        styleBtn();
        // updateActiveLink();
    }
}

function nextBtn() {
    if (currentvalue < Math.ceil(data.length / 10)) {
        currentvalue++;
        displayPagination();
        displayData();
        styleBtn();
        // updateActiveLink();
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
        // console.log(l);
        l.classList.remove('active');
    }
    if (currentvalue <  Math.ceil(data.length / 10) ) {
        link[currentvalue - 1].classList.add('active');
    }
    else{
        link[19].classList.add('active');
    }
}

function styleBtn() {
    prev.style.display = currentvalue === 1 ? "none" : "inline";
    next.style.display = currentvalue === Math.ceil(data.length / 10) ? "none" : "inline";
}

// Initial display
displayData();
styleBtn();

