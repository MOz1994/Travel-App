function checkValid() {
    let x = document.forms["infoForm"]["city"].value;
    if (x == "") {
        alert("city must be filled out");
        return false;

    }
    let ddate = document.forms["infoForm"]["date"].value;
    if (ddate == "") {
        alert("you must choose Depart Date ");
        return false;
    }
    // var today = new Date();
    // var Tdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    // if (ddate < Tdate) {
    //     alert("The Date is from the Past ");
    //     return false;
    // }
    else {
        return true;
    }
    // Client.performAction()

}
export { checkValid }