function fnamevalidate() {
    let name1 = document.getElementById("fName").value;
    var rel = /^[a-zA-Z\s]{3,50}$/;
    if (rel.test(name1)) {
        document.getElementById("fName").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("fName").style.borderColor = "red";
        return false;
    }
}

function emailvalidate() {
    let name1 = document.getElementById("emailID").value;
    var rel = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (rel.test(name1)) {
        document.getElementById("emailID").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("emailID").style.borderColor = "red";
        return false;
    }
}

function uservalidate() {
    let name1 = document.getElementById("username").value;
    var rel = /^[0-9a-zA-Z]{5,10}$/;
    if (rel.test(name1)) {
        document.getElementById("username").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("username").style.borderColor = "red";
        return false;
    }
}

function passvalidate() {
    let name1 = document.getElementById("pass").value;
    var rel = /^[0-9a-zA-Z]{8,16}$/;
    if (rel.test(name1)) {
        document.getElementById("pass").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("pass").style.borderColor = "red";
        return false;
    }
}

function passconfirm() {
    let name1 = document.getElementById("pass").value;
    let name2 = document.getElementById("cnfrmPass").value;
    if (name1 == name2) {
        document.getElementById("cnfrmPass").style.borderColor = "green";
        return true;
    } else {
        document.getElementById("cnfrmPass").style.borderColor = "red";
        return false;
    }
}

function check1() {
    nameBorder = document.getElementById("fName").style.borderColor;
    mailBorder = document.getElementById("emailID").style.borderColor;
    userNameBorder = document.getElementById("username").style.borderColor;
    passBorder = document.getElementById("pass").style.borderColor;
    cnfrmPassBorder = document.getElementById("cnfrmPass").style.borderColor;

    if (nameBorder != "green" || mailBorder != "green" || passBorder != "green" || userNameBorder != "green") {
        if (cnrmPassBorder != "green") {
            document.getElementById("registrationForm").reset();
            document.getElementById("fName").style.borderColor = "red";
            document.getElementById("emailID").style.borderColor = "red";
            document.getElementById("username").style.borderColor = "red";
            document.getElementById("pass").style.borderColor = "red";
            document.getElementById("cnrmPass").style.borderColor = "red";
        }
    }
}