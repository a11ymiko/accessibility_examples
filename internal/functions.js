function toggleInnerHtmlGood(){
    const btnGood = document.getElementById('good_button')
    var btnTextGood = document.getElementById('good_button').innerHTML;

    if (btnTextGood==='Następna strona -&gt;'){
        btnGood.innerHTML='&lt;- Poprzednia strona';
    } 
    if (btnTextGood==='&lt;- Poprzednia strona'){
        btnGood.innerHTML='Ostatnia strona';
    }
    if (btnTextGood==='Ostatnia strona'){
        btnGood.innerHTML='Pierwsza strona';
    } 
    if (btnTextGood==='Pierwsza strona'){
        btnGood.innerHTML='Następna strona -&gt;';
    }
}

function toggleInnerHtmlBad(nr){
    const btnBad = document.getElementById('bad_button'+nr)
    var btnTextBad = document.getElementById('bad_button'+nr).innerHTML;
  
    if (btnTextBad==='Następna strona -&gt;'){
        btnBad.innerHTML='&lt;- Poprzednia strona';
    } 
    if (btnTextBad==='&lt;- Poprzednia strona'){
        btnBad.innerHTML='Ostatnia strona';
    }
    if (btnTextBad==='Ostatnia strona'){
        btnBad.innerHTML='Pierwsza strona';
    } 
    if (btnTextBad==='Pierwsza strona'){
        btnBad.innerHTML='Następna strona -&gt;';
    }
  }

const openPopupGood = document.getElementById("open-popup-good");
const openPopupBad = document.getElementById("open-popup-bad");
const popupBad = document.getElementById('popup-bad');
const popupGood = document.getElementById('popup-good');
openPopupGood.addEventListener('click', () => popupGood.showModal('popup-good'));

const closeBtn = document.getElementById('close-popup');
const cencelBtn = document.getElementById('cencel-popup');

function openBad(){
    popupBad.showModal('popup-bad');
    const firstLink = document.getElementById('first-link');
    firstLink.focus();
}

openPopupBad.addEventListener('click', () => openBad());

function visiblePopupLabel(){
    const popupLabel = document.getElementById('popup-label');
    const popupInput = document.getElementById('popup-input');
    
    popupLabel.className = "";
    popupInput.setAttribute("placeholder", "");
}

function invisiblePopupLabel(){
    const popupLabel = document.getElementById('popup-label');
    const popupInput = document.getElementById('popup-input');

    popupLabel.className = "sr-only";
    popupInput.setAttribute("placeholder", "Login");
}

function changeIcon(x){
    const btnIcon = document.getElementById('btn_icon'+x);
    if(x === 0){
        if(btnIcon.getAttribute("src") === "../images/save.png"){
            btnIcon.setAttribute("src", "../images/delete.png");
            btnIcon.setAttribute("alt", "Usuń element");
            sleep(1000);
        }
        if(btnIcon.getAttribute("src") === "../images/delete.png"){
            btnIcon.setAttribute("src", "../images/save.png");
            btnIcon.setAttribute("alt", "Zapisz element");
            sleep(1000);
        }
    }
    if(btnIcon.getAttribute("src") === "../images/save.png"){
        btnIcon.setAttribute("src", "../images/delete.png");
        sleep(1000);
    }
    if(btnIcon.getAttribute("src") === "../images/delete.png"){
        btnIcon.setAttribute("src", "../images/save.png");
        sleep(1000);
    }
}

function changeText(){
    const btnDiv = document.getElementById('btn_div');
    btnDiv.innerHTML = "Zapisano pomyślnie!";
}

function toggleInaccessibleAccorden(){
    const toggleBtnMultipleAccordion = document.getElementById("toggle-inaccessible-accordion");
    const accordionMultipleContent = document.getElementById('accordion-inaccessible-content');
    accordionMultipleContent.classList.toggle('hidden');
  }