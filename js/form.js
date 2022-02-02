function $(selector) {
    return document.querySelector(selector);
}

//Create DOM Nodes
$("#btn").addEventListener("click", function() {
    var input = document.createElement("input");
    input.setAttribute("type", "email");
    input.setAttribute("placeholder", "E-mail");
    input.setAttribute("name", "mails");
    $("#form").appendChild(input);
    myAlert("Add new email input");
});

function myAlert(msg) {
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg;
    $("body").insertBefore(div, $("body").firstChild);
}