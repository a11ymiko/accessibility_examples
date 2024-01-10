//Flyout menu managing aria-expanded states and visibility
function menuToggle(name){
  btn = document.getElementById("btn-"+name);
  if(name == "good-practices"){
    other_name = "bad-practices";
  } 
  if(name == "bad-practices"){
    other_name = "good-practices";
  }
  other_btn = document.getElementById("btn-"+other_name);
  current_state = btn.getAttribute("aria-expanded");
  current_other_state = other_btn.getAttribute("aria-expanded");
  if(current_state == "false" & current_other_state == "false"){
    btn.setAttribute("aria-expanded", "true");
    menuVisible("menu-"+name);
  }
  if(current_state == "false" & current_other_state == "true"){
    btn.setAttribute("aria-expanded", "true");
    menuVisible("menu-"+name);
    other_btn.setAttribute("aria-expanded", "false");
    menuInvisible("menu-"+other_name);
  }
  if(current_state == "true" & current_other_state == "false"){
    btn.setAttribute("aria-expanded", "false");
    menuInvisible("menu-"+name);
    other_btn.setAttribute("aria-expanded", "false");
    menuInvisible("menu-"+other_name);
  }
  if(current_state == "true" & current_other_state == "true"){
    btn.setAttribute("aria-expanded", "false");
    menuInvisible("menu-"+name);
    other_btn.setAttribute("aria-expanded", "false");
    menuInvisible("menu-"+other_name);
  }
}

//adding event listeners for managing focus states in expandable menus
menu_good = document.getElementById("menu-good-practices");
menu_good_node = menu_good.querySelectorAll("a");
menu_bad = document.getElementById("menu-bad-practices");
menu_bad_node = menu_bad.querySelectorAll("a");
let last_good = menu_good_node[menu_good_node.length- 1];
let last_bad = menu_bad_node[menu_bad_node.length- 1];
//last.addEventListener('keydown', focusManagement());

//functionality: closing submenu with Esc key
menu_good.addEventListener('keydown', (event) =>{
  var key_code = event.code;
  if(key_code === 'Escape'){
    btn = document.getElementById('btn-good-practices');
    btn.setAttribute("aria-expanded", "false");
    menuInvisible("menu-good-practices");
    btn.focus();
  }
})

menu_bad.addEventListener('keydown', (event) =>{
  var key_code = event.code;
  if(key_code === 'Escape'){
    btn = document.getElementById('btn-bad-practices');
    btn.setAttribute("aria-expanded", "false");
    menuInvisible("menu-bad-practices");
    btn.focus();
  }
})

//functionality: moving focus inside submenu in the loop
last_good.addEventListener('keydown', (event) =>{
  var key_code = event.code;
  if(key_code === 'Tab'){
    menu_li = menu_good.querySelector("li");
    menu_li.focus();
  }
})

last_bad.addEventListener('keydown', (event) =>{
  var key_code = event.code;
  if(key_code === 'Tab'){
    menu_li = menu_bad.querySelector("li");
    menu_li.focus();
  }
})

//functionality: making menu visible/invisible
function menuVisible(name){
  menu = document.getElementById(name);
  menu.style.display = "block";
  menu.querySelector("a").focus();
}

function menuInvisible(name){
  menu = document.getElementById(name);
  menu.style.display = "none";
}

//functionality for Sensorycznie
function productsA11yToggle(name){
  btn = document.getElementById("btn-"+name);
  current_state = btn.getAttribute("aria-expanded");
  if(current_state == "false"){
    btn.setAttribute("aria-expanded", "true");
    menuVisible("menu-"+name);
  }
  else{
    btn.setAttribute("aria-expanded", "false");
    menuInvisible("menu-"+name);
  }
}

function productsToggle(name){
  btn = document.getElementById("btn-"+name);
  menu = document.getElementById("menu-"+name);
  current_style = menu.style.display
  if(current_style === "none"){
    menuVisible("menu-"+name);
  }
  if(current_style === "block"){
    menuInvisible("menu-"+name);
  }
}

//functionalities for popup
/* function openPopup(){
  popup = document.getElementById("popup");
  main = document.getElementById("main");
  popup.style.display = "block";
  button_close = document.getElementById('close-popup');
  moveFocus(button);
  main.style.display = "none";
} */

const openPopup = document.getElementById("open-popup");
const popup = document.getElementById('popup');
openPopup.addEventListener('click', () => popup.showModal());


/*
function closePopup(){
  popupLayout = document.getElementById("popup");
  main = document.getElementById("main");
  button_open = document.getElementById('open-popup');
  moveFocus(button);
  popupLayout.style.display = "none";
  main.style.display = "block";
}

function moveFocus(button){
  button.focus();
}
*/
