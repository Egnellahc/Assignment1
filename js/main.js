//Zhao Wang
//991556434
//grab data from main.html

var nameInput = document.getElementsById("cname");
var address = document.getElementsById("caddress");
var room;
var width = document.getElementById("width");
var length = document.getElementById("length");
var color = document.getElementById("ptypes");

$(document).ready(() => {
    // $('input[name="room"]:checked').each(function(){
    //     let id = $(this).attr('name');
    //     let value = $(this).val();
    //     localStorage.setItem(id, value);
    //     return false;
    // });


    localStorage.setItem("cName", nameInput.val());
    localStorage.setItem("cAddress", address.val());
    localStorage.setItem("width", width.val());
    localStorage.setItem("length", width.val());
    localStorage.setItem("pTypes", color.val());



});


function clearLocalStorage(){
    localStorage.clear();
}