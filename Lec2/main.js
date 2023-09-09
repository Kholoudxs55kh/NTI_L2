body{
    position: relative;
}

.mainpage{
    display:flex;
    width:70%;
    margin-left:15%;
    margin-right: 15%;
    flex-direction: column;
}

#add{
    width:150px;
    background-color: rgba(27, 82, 248, 0.848);
    text-align: center;
    height:40px;
    color:aliceblue;
    line-height: 40px;
    border-radius: 5%;
    margin-bottom: 3%;
    font-size: large;
}

#add:hover{
    cursor: pointer;
}

table{
    border: 0.5px solid #00000058;
    border-spacing: 0px;
}

thead{
    background-color: #dddddd7c;
    height: 35px;
}

td{
    border: 0.5px solid #00000058;
    height:40px;
    padding-left: 5px;
}


th{
    border: 0.5px solid #00000058;
}

.action{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btns{
    width: 200px;
    display: flex;
    justify-content: space-around;
}
.edit {
    width: 80px;
    height:30px;
    line-height: 30px;
    text-align: center;
    background-color: green;
    color: aliceblue;
    border-radius: 5%;
}

.edit:hover{
    cursor: pointer;
}

.delete{
    width: 100px;
    height:30px;
    line-height: 30px;
    text-align: center;
    background-color: red;
    color: aliceblue;
    border-radius: 5%;
}

.delete:hover{
    cursor: pointer;
}

i:hover{
    cursor: pointer;
}
/* =============================================== */
/* =============================================== */
/* =============================================== */


#editpage{
    visibility: hidden;
    padding: 15px;
    position: absolute;
    width:50%;
    top: 35%;
    left:25%;
    background-color: #fff;
}
#addpage{
    visibility: hidden;
    padding: 15px;
    position: absolute;
    width: 50%;
    top: 35%;
    left:25%;
    background-color: #fff;
}
.nothing{
    display: flex;
    justify-content: space-between;
}
#exit, #exitEdit {

    color: #929191;
    font-size: larger;
    font-weight: bold;
}

#exit:hover, #exitEdit:hover
{
    color: black;
    text-decoration: none;
    cursor: pointer;
}
#exitEdit
.employeeName{
    height: 25px;
    width: 95%;
}

.employeeBirth{
    height: 25px;
    width: 95%;
}

.employeeSkills{
    height: 25px;
    width: 95%;
}

.editbtns{
    width: min-content;
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
}

#editApprove{
    background-color: #0038e294;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5%;
    color: aliceblue;
    margin-right: 2px;
}
#editApprove:hover{
    cursor: pointer;
}

.cancelEdit{
    background-color: #83848794;
    width: 60px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5%;
    color: aliceblue;
}

.cancelEdit:hover{
    cursor: pointer;
}

#addApprove{
    background-color: #0038e294;
    width: 130px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5%;
    color: aliceblue;
    margin-right: 2px;
}

#addApprove:hover{
    cursor: pointer;
}
.test:hover > .main {
    z-index: -1;
}
.test:hover > .editpage{
    visibility: visible;
}
.test:hover > body{
    background-color: #83848794;
}
