menu_list_array = ["Veg Margherita Pizza",
    "Veg Panner Pizza",
    "Chicken Pizza", "Chicken Hydrabadi Pizza", "Carrecorn Pizza", "Pollo Pizza", "Por Favor Pizza"];
function getmenu() {
    menu_list_array.sort();
    var htmldata;
    htmldata = "<ol class='menulist'>";
    var length_o_menu = menu_list_array.length;
    console.log(length_o_menu);
    for (var j = 0; j < length_o_menu; j++) {
        htmldata = htmldata + '<li>' + menu_list_array[j] + '</li>';
    }
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    var length_o_menu = menu_list_array.length;
    menu_list_array.sort();
    var htmldata;
    htmldata = "<section class='cards'>"
    for (var k = 0; k < length_o_menu; k++) {
        htmldata = htmldata + '<div class="card">'
            + '<img src="images/pizzaImg.png"/>'
            + menu_list_array[k]
            + '</div>'
    }

    htmldata = htmldata + "</section>";
    document.getElementById("display_addedmenu").innerHTML = htmldata;


    document.getElementById("add_toppings").style.display = "none";
    document.getElementById("addingToppings").style.display = "inline-block";
}
function add_top() {
    var item = document.getElementById("addingToppings").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    console.log(menu_list_array); 
    add_item();
}