function submitButton() {

// Precte hodnoty z input boxu 
    const username = document.getElementById("input-username").value;
    const email = document.getElementById("input-email").value;
    const admin = document.getElementById("input-admin").checked ? "X" : "-";
    const imageElement = document.getElementById("input-image");
    const image = imageElement.files[0];
    const rowExists = false;
    const table = document.getElementById("table").getElementsByTagName("tbody")[0];
    const rows = table.getElementsByTagName("tr");


    // Update když je username už v tabulce
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        if (cells[0].textContent === username) {
            event.preventDefault();
            cells[1].textContent = email;
            cells[2].textContent = admin;
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

