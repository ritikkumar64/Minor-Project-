// script.js

// Array to store candidates
// const candidates = [];

// // Function to add a candidate
// function addCandidate(name) {
//     const candidate = {
//         name: name,
//         votes: 0
    
//     };
//     candidates.push(candidate);
//     updateTable();
// }

// // Function to update the table
// function updateTable() {
//     const tableBody = document.querySelector("#candidateTable tbody");
//     tableBody.innerHTML = ""; // Clear existing rows

//     candidates.forEach((candidate, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${candidate.name}</td>
//             <td>${candidate.votes}</td>
//         `;
//         tableBody.appendChild(row);
//     });
// }

// // Event listener for form submission
// document.getElementById("candidateForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
//     const candidateName = document.getElementById("candidateName").value.trim();

//     if (candidateName) {
//         addCandidate(candidateName);
//         document.getElementById("candidateName").value = ""; // Clear input field
//     }
// });


// // script.js

// // Initial array of candidates
// const candidates = [
//     { name: "Ritik", votes: 1 },
//     { name: "Aman", votes: 0 },
//     { name: "Pooja", votes: 0 },
//     { name: "Sana", votes: 0 },
//     { name: "Raj", votes: 0 }
// ];

// // Function to add a new candidate
// function addCandidate(name) {
//     const candidate = {
//         name: name,
//         votes: 0
//     };
//     candidates.push(candidate);
//     updateTable();
// }

// // Function to update the table with all candidates
// function updateTable() {
//     const tableBody = document.querySelector("#candidateTable tbody");
//     tableBody.innerHTML = ""; // Clear existing rows

//     candidates.forEach((candidate, index) => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${candidate.name}</td>
//             <td>${candidate.votes}</td>
//         `;
//         tableBody.appendChild(row);
//     });
// }

// // Initialize table with default candidates
// updateTable();

// // Event listener for form submission
// document.getElementById("candidateForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
//     const candidateName = document.getElementById("candidateName").value.trim();

//     if (candidateName) {
//         addCandidate(candidateName);
//         document.getElementById("candidateName").value = ""; // Clear input field
//     }
// });


// script.js

// Initial array of candidates
const candidates = [
    { name: "Rahul Gandhi", votes: 0},
    { name: "Narendara Modi", votes: 1 },
    { name: "Lalu Prasad Yadav", votes: 0 },
    { name: "Arvind kejriwal", votes: 0 },
    { name: "M K Stalin", votes: 0 }
];

// Function to add a new candidate
function addCandidate(name) {
    const candidate = {
        name: name,
        votes: 0
    };
    candidates.push(candidate);
    updateTable();
}

// Function to update the table with all candidates
function updateTable() {
    const tableBody = document.querySelector("#candidateTable tbody");
    tableBody.innerHTML = ""; // Clear existing rows

    candidates.forEach((candidate, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${candidate.name}</td>
            <td>${candidate.votes}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize table with default candidates
updateTable();

// Event listener for form submission
document.getElementById("candidateForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    const candidateName = document.getElementById("candidateName").value.trim();

    if (candidateName) {
        addCandidate(candidateName);
        document.getElementById("candidateName").value = ""; // Clear input field
    }
});
