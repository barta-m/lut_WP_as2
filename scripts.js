let imageUrl = "";

// Listen for uploaded image and save it the URL for future use (with help of stackoverflow, chatgpt etc.)
document.getElementById('input-image').addEventListener('change', getImage);
function getImage(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            imageUrl = URL.createObjectURL(file);
        }
    }


// Submit button that adds a new row with given values or changes values for existing username
function submitButton() {
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const admin = document.getElementById("input-admin").checked ? "X" : "-";
    const table = document.getElementById("table").getElementsByTagName("tbody")[0];
    const rows = table.getElementsByTagName("tr");
    let imageElement = document.getElementById("input-image");
    let image = imageElement.files[0];
    let rowExists = false;


    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
        if (cells[0].textContent === username) {
            event.preventDefault();
            cells[1].textContent = email;
            cells[2].textContent = admin;
            cells[3].innerHTML = ""
            if (imageUrl) {
            const img2 = document.createElement("img");
            img2.src = imageUrl;
            img2.alt = "";
            img2.width = 64;
            img2.height = 64;
            cells[3].appendChild(img2);
            } 
            rowExists = true;
            break;
        }
    }

    
    if (!rowExists) {
    const newRow = table.insertRow();
    const newUsername = newRow.insertCell(0);
    const newEmail = newRow.insertCell(1);
    const newAdmin = newRow.insertCell(2);
    const newImage = newRow.insertCell(3);

    newUsername.textContent = username;
    newEmail.textContent = email;
    newAdmin.textContent = admin;
    if (imageUrl) {
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "";
    img.width = 64;
    img.height = 64;
    newImage.appendChild(img);
    } else {
        newImage.innerHTML = "";
    }
    }
    event.preventDefault();
}


// Empties table and leaves headers
function emptyButton() {
    var tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';
    event.preventDefault();

}