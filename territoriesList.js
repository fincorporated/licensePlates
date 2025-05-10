const territories = [
    { id: 1, name: 'Alabama', status: 'unseen', country: 'USA' },
    { id: 2, name: 'Alaska', status: 'unseen', country: 'USA' },
    { id: 3, name: 'Arizona', status: 'unseen', country: 'USA' },
    { id: 4, name: 'Arkansas', status: 'unseen', country: 'USA' },
    { id: 5, name: 'California', status: 'unseen', country: 'USA' },
    { id: 6, name: 'Colorado', status: 'unseen', country: 'USA' },
    { id: 7, name: 'Connecticut', status: 'unseen', country: 'USA' },
    { id: 8, name: 'Delaware', status: 'unseen', country: 'USA' },
    { id: 9, name: 'Florida', status: 'unseen', country: 'USA' },
    { id: 10, name: 'Georgia', status: 'unseen', country: 'USA' },
    { id: 11, name: 'Hawaii', status: 'unseen', country: 'USA' },
    { id: 12, name: 'Idaho', status: 'unseen', country: 'USA' },
    { id: 13, name: 'Illinois', status: 'unseen', country: 'USA' },
    { id: 14, name: 'Indiana', status: 'unseen', country: 'USA' },
    { id: 15, name: 'Iowa', status: 'unseen', country: 'USA' },
    { id: 16, name: 'Kansas', status: 'unseen', country: 'USA' },
    { id: 17, name: 'Kentucky', status: 'unseen', country: 'USA' },
    { id: 18, name: 'Louisiana', status: 'unseen', country: 'USA' },
    { id: 19, name: 'Maine', status: 'unseen', country: 'USA' },
    { id: 20, name: 'Maryland', status: 'unseen', country: 'USA' },
    { id: 21, name: 'Massachusetts', status: 'unseen', country: 'USA' },
    { id: 22, name: 'Michigan', status: 'unseen', country: 'USA' },
    { id: 23, name: 'Minnesota', status: 'unseen', country: 'USA' },
    { id: 24, name: 'Mississippi', status: 'unseen', country: 'USA' },
    { id: 25, name: 'Missouri', status: 'unseen', country: 'USA' },
    { id: 26, name: 'Montana', status: 'unseen', country: 'USA' },
    { id: 27, name: 'Nebraska', status: 'unseen', country: 'USA' },
    { id: 28, name: 'Nevada', status: 'unseen', country: 'USA' },
    { id: 29, name: 'New Hampshire', status: 'unseen', country: 'USA' },
    { id: 30, name: 'New Jersey', status: 'unseen', country: 'USA' },
    { id: 31, name: 'New Mexico', status: 'unseen', country: 'USA' },
    { id: 32, name: 'New York', status: 'unseen', country: 'USA' },
    { id: 33, name: 'North Carolina', status: 'unseen', country: 'USA' },
    { id: 34, name: 'North Dakota', status: 'unseen', country: 'USA' },
    { id: 35, name: 'Ohio', status: 'unseen', country: 'USA' },
    { id: 36, name: 'Oklahoma', status: 'unseen', country: 'USA' },
    { id: 37, name: 'Oregon', status: 'unseen', country: 'USA' },
    { id: 38, name: 'Pennsylvania', status: 'unseen', country: 'USA' },
    { id: 39, name: 'Rhode Island', status: 'unseen', country: 'USA' },
    { id: 40, name: 'South Carolina', status: 'unseen', country: 'USA' },
    { id: 41, name: 'South Dakota', status: 'unseen', country: 'USA' },
    { id: 42, name: 'Tennessee', status: 'unseen', country: 'USA' },
    { id: 43, name: 'Texas', status: 'unseen', country: 'USA' },
    { id: 44, name: 'Utah', status: 'unseen', country: 'USA' },
    { id: 45, name: 'Vermont', status: 'unseen', country: 'USA' },
    { id: 46, name: 'Virginia', status: 'unseen', country: 'USA' },
    { id: 47, name: 'Washington', status: 'unseen', country: 'USA' },
    { id: 48, name: 'West Virginia', status: 'unseen', country: 'USA' },
    { id: 49, name: 'Wisconsin', status: 'unseen', country: 'USA' },
    { id: 50, name: 'Wyoming', status: 'unseen', country: 'USA' },
    { id: 51, name: 'Alberta', status: 'unseen', country: 'Canada' },
    { id: 52, name: 'British Columbia', status: 'unseen', country: 'Canada' },
    { id: 53, name: 'Manitoba', status: 'unseen', country: 'Canada' },
    { id: 54, name: 'New Brunswick', status: 'unseen', country: 'Canada' },
    { id: 55, name: 'Newfoundland and Labrador', status: 'unseen', country: 'Canada' },
    { id: 56, name: 'Nova Scotia', status: 'unseen', country: 'Canada' },
    { id: 57, name: 'Ontario', status: 'unseen', country: 'Canada' },
    { id: 58, name: 'Prince Edward Island', status: 'unseen', country: 'Canada' },
    { id: 59, name: 'Quebec', status: 'unseen', country: 'Canada' },
    { id: 60, name: 'Saskatchewan', status: 'unseen', country: 'Canada' }
  ];
  
const usTerritories = territories.filter(item => item.country === 'USA');
const caTerritories = territories.filter(item => item.country === 'Canada');

const usTerritoryNames = usTerritories.map(item => item.name);
const caTerritoryNames = caTerritories.map(item => item.name);


const usListContainer = document.getElementById("usList");
const usListElement = document.createElement("ul");

const caListContainer = document.getElementById("caList");
const caListElement = document.createElement("ul");


usTerritoryNames.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    usListElement.appendChild(listItem);
    const status = localStorage.getItem(item) || "unseen";
    listItem.className = status;
    listItem.setAttribute("id", "item");
    listItem.addEventListener("click", markSeen);

    function markSeen() {
        if (listItem.className == "unseen") {
            listItem.className = "seen";
            localStorage.setItem(item, "seen");
        } else {
            listItem.className = "unseen";
            localStorage.setItem(item, "unseen");
        }
        document.getElementById("totalCounter").innerText = document.querySelectorAll("li.seen").length;
        document.getElementById("usCounter").innerText = document.querySelectorAll("#usList li.seen").length;
    }
});

usListContainer.appendChild(usListElement);

caTerritoryNames.forEach(item => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    caListElement.appendChild(listItem);
    const status = localStorage.getItem(item) || "unseen";
    listItem.className = status;
    listItem.setAttribute("id", "item");
    listItem.addEventListener("click", markSeen);

    function markSeen() {
        if (listItem.className == "unseen") {
            listItem.className ="seen";
            localStorage.setItem(item, "seen");
        } else {
            listItem.className = "unseen";
            localStorage.setItem(item, "unseen")
        }
        document.getElementById("totalCounter").innerText = document.querySelectorAll("li.seen").length;
        document.getElementById("caCounter").innerText = document.querySelectorAll("#caList li.seen").length;
    }
});

caListContainer.appendChild(caListElement);

const seenTerritories = document.querySelectorAll('li.seen');
document.getElementById("totalCounter").innerText = seenTerritories.length;

const usSeenTerritories = document.querySelectorAll('#usList li.seen');
const caSeenTerritories = document.querySelectorAll('#caList li.seen');

document.getElementById("usCounter").innerText = usSeenTerritories.length;
document.getElementById("caCounter").innerText = caSeenTerritories.length;

document.getElementById("reset").addEventListener("click", clearStorage);

function clearStorage() {
    localStorage.clear();
    location.reload();
}
