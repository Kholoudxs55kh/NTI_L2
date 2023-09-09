let table = document.getElementById('table')
let editForm = document.getElementById("editpage");
let addForm = document.getElementById("addpage");

let addRequest = document.getElementById("add");
let asscendingEles = document.querySelectorAll('i'); // re asscend when click
let editRequests = document.querySelectorAll(".edit");
let deleteCommands = document.querySelectorAll(".delete");


let editConfirm = document.getElementById('editApprove');
let addConfirm = document.getElementById("addApprove");

let exitEditForm = document.getElementById('exit');
let exitAddForm = document.getElementById('exitEdit');

let cancelEdits = document.querySelectorAll(".cancelEdit")

editRequests.forEach(function(editRequest) {
    editRequest.addEventListener('click', function(e){
        editForm.style.visibility = 'visible';
        editConfirm.addEventListener('click', function(e){
            let employeeName = document.querySelector('#editpage .employeeName').value.trim();
            let employeeBirth = document.querySelector('#editpage .employeeBirth').value;
            let employeeSkills = document.querySelector('#editpage .employeeSkills').value.trim();

            let i = editRequest.parentElement.parentElement.previousElementSibling;
            console.log(i)
            let curr_row = editRequest.parentElement.parentElement.parentElement;
            const rowContainer = `
                  <td class="num">${i}</td>
                  <td class="name">${employeeName}</td>
                  <td class="birthDate">${employeeBirth}</td>
                  <td class="skills">${employeeSkills}</td>
                  <td class="action">
                    <div class="arrows">
                      <i class="fa-solid fa-arrow-down-up-across-line"></i>
                    </div>
                    <div class="btns">
                      <div class="edit">Edit</div>
                      <div class="delete">Delete</div>
                    </div>
                  </td>`
        curr_row.innerHTML = '<tr>' + rowContainer + '</tr>' ;
        });
    });
});

addRequest.addEventListener('click', function(e){
    addForm.style.visibility = 'visible';
});

exitAddForm.addEventListener('click', function(e){
    addForm.style.visibility = 'hidden';
});

exitEditForm.addEventListener('click', function(e){
    editForm.style.visibility = 'hidden';
});

cancelEdits.forEach(function(cancelEdit){
    cancelEdit.addEventListener('click', function(e){
        cancelEdit.parentElement.parentElement.style.visibility = 'hidden';
    });
});

deleteCommands.forEach(function(deleteCommand){
    deleteCommand.addEventListener('click', function(e){
        const MemberDelet = deleteCommand.parentElement.parentElement.parentElement;
        MemberDelet.parentNode.removeChild(MemberDelet);
    });
});

addConfirm.addEventListener('click', function(e){
    let employeeName = document.querySelector('#addpage .employeeName').value.trim();
    let employeeBirth = document.querySelector('#addpage .employeeBirth').value;
    let employeeSkills = document.querySelector('#addpage .employeeSkills').value.trim();

    let i = document.querySelectorAll('tr').length;

    const new_row = document.createElement('tr');
    const rowContainer = `
                <td class="num">${i}</td>
              <td class="name">${employeeName}</td>
              <td class="birthDate">${employeeBirth}</td>
              <td class="skills">${employeeSkills}</td>
              <td class="action">
                <div class="arrows">
                  <i class="fa-solid fa-arrow-down-up-across-line"></i>
                </div>
                <div class="btns">
                  <div class="edit">Edit</div>
                  <div class="delete">Delete</div>
                </div>
              </td>`
    new_row.innerHTML+= rowContainer;
    table.appendChild(new_row);
});

// editConfirm.addEventListener('click', function(e){
//     let employeeName = document.querySelector('#editpage .employeeName').value.trim();
//     let employeeBirth = document.querySelector('#editpage .employeeBirth').value;
//     let employeeSkills = document.querySelector('#editpage .employeeSkills').value.trim();

//     let curr_row = editRequest.parentElement;
//     console.log(curr_row);
// });
