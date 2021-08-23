
/* View- Controller */

/* Der Plan
    Einlesen Daten von Webseite 
	Check Daten 
    Btn. Trigger 
    Business-Logic (Alter --> Getränk) 
    Bild austauschen 
*/

// Modul Ablaufsteuerung | Test:

// controller()
function controller() {
    output(updateImg(checkAge(getInput())));
}

// Trigger - Btn 

const btn = document.getElementById("trigBtn");
btn.addEventListener("click", actOnClick)

// Trigger - Input

const field  = document.getElementsByName("eingabe")[0];
field.addEventListener("input",isInputValid);

// Event-Dispatcher

function actOnClick() {
    if (isInputValid()) {
    controller();
    } else {
        output("Input nich korrekt!")
    }
    
}

// Modul: Check auf korrekte Eingaben ...

function isInputValid() {
    
    let inputStr = field.value;
    let patt = /^[0-9]{1,3}$/g;
    let cond = patt.test(inputStr);

    if (!cond) {        // Fehlerbehandlung
        field.value = "";
        updateImg(data.default.bev);
    }

    return cond;
}

// Modul: Eingabe | Test:

// output(getInput());
function getInput() {
    const inputField  = document.getElementsByName("eingabe")[0];
    let age = parseInt(inputField.value);
    return age;
}

//Modul: Business-Logic (Mapping) | Test:

// output(checkAge(14));
// output(checkAge(12));
// output(checkAge(22));
// output(checkAge(122));

function checkAge(age){
    switch (true) 
{
    case (age >= data.milk.lower) && (age <= data.milk.upper):
        return data.milk.bev;
       
    case (age >= data.juice.lower) && (age <= data.juice.upper):
        return data.juice.bev;

    case (age >= data.cola.lower) && (age <= data.cola.upper):
        return data.cola.bev;

    case (age >= data.wine.lower) && (age <= data.wine.upper):
        return data.wine.bev;
    
    default:
        return data.default.bev;
  
    }
}

// Modul: Bild aktualisieren | Test:

// output(updateImg("milch"));
function updateImg(imgName){
    let img = document.getElementById("bevImg");
    img.src = gui.img.path + imgName + gui.img.ext;
    return imgName;                  // monitoring
    
}

//Modul: Konsolenausgabe --> Test:
function output(outputStr) {
    console.log(outputStr);
}
