let imageUrl = "";

function getImage(event) {
// do imageURL se uloží URL obrazku pro potom
        const file = event.target.files[0];
    
        // Check if the file is an image
        if (file && file.type.startsWith('image/')) {
            imageUrl = URL.createObjectURL(file); // Create a URL for the image
            console.log('Image URL stored: ', imageUrl); // Log the image URL
        }
    }
    
    // Add event listener to run when the user uploads an image
    document.getElementById('input-image').addEventListener('change', getImage);



function submitButton() {

// Precte hodnoty z input boxu 
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const admin = document.getElementById("input-admin").checked ? "X" : "-";
    let imageElement = document.getElementById("input-image");
    let image = imageElement.files[0];
    let rowExists = false;
    const table = document.getElementById("table").getElementsByTagName("tbody")[0];
    const rows = table.getElementsByTagName("tr");


    // Update když je username už v tabulce
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
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

    // Když je unique username, tak přidá novej řádek
    if (!rowExists) {
    const newRow = table.insertRow();
    const newUsername = newRow.insertCell(0);
    const newEmail = newRow.insertCell(1);
    const newAdmin = newRow.insertCell(2);
    const newImage = newRow.insertCell(3);

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

    // a přidá hodnoty do buňek toho řádku
    newUsername.textContent = username;
    newEmail.textContent = email;
    newAdmin.textContent = admin;
    }

    event.preventDefault();
}


function emptyButton() {
    var tableBody = document.getElementById('table').getElementsByTagName('tbody')[0];
    
    tableBody.innerHTML = '';
    
    event.preventDefault();

}