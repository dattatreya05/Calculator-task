let sectionElement = document.createElement("section");

let divMainElement = document.createElement("div");
divMainElement.setAttribute("class", "container");
sectionElement.appendChild(divMainElement);


let divElement = document.createElement("div");
divElement.setAttribute("id", "display");
divMainElement.appendChild(divElement);


let divSubElement = document.createElement("div");
divSubElement.setAttribute("id", "buttons");

let div1 = document.createElement("div");
div1.setAttribute("class", "button");
div1.innerText = "c";
divSubElement.appendChild(div1);
let div2 = document.createElement("div");
div2.setAttribute("class", "button");
div2.innerHTML = "&larr;";
divSubElement.appendChild(div2);
let div3 = document.createElement("div");
div3.setAttribute("class", "button");
div3.innerText = ".";
divSubElement.appendChild(div3);
let div4 = document.createElement("div");
div4.setAttribute("class", "button");
div4.innerText = "*";
divSubElement.appendChild(div4);
let div5 = document.createElement("div");
div5.setAttribute("class", "button");
div5.innerText = "7";
divSubElement.appendChild(div5);
let div6 = document.createElement("div");
div6.setAttribute("class", "button");
div6.innerText = "8";
divSubElement.appendChild(div6);
let div7 = document.createElement("div");
div7.setAttribute("class", "button");
div7.innerText = "9";
divSubElement.appendChild(div7);
let div8 = document.createElement("div");
div8.setAttribute("class", "button");
div8.innerText = "/";
divSubElement.appendChild(div8);
let div9 = document.createElement("div");
div9.setAttribute("class", "button");
div9.innerText = "4";
divSubElement.appendChild(div9);
let div10 = document.createElement("div");
div10.setAttribute("class", "button");
div10.innerText = "5";
divSubElement.appendChild(div10);
let div11 = document.createElement("div");
div11.setAttribute("class", "button");
div11.innerText = "6";
divSubElement.appendChild(div11);
let div12 = document.createElement("div");
div12.setAttribute("class", "button");
div12.innerText = "-";
divSubElement.appendChild(div12);
let div13 = document.createElement("div");
div13.setAttribute("class", "button");
div13.innerText = "1";
divSubElement.appendChild(div13);
let div14 = document.createElement("div");
div14.setAttribute("class", "button");
div14.innerText = "2";
divSubElement.appendChild(div14);
let div15 = document.createElement("div");
div15.setAttribute("class", "button");
div15.innerText = "3";
divSubElement.appendChild(div15);
let div16 = document.createElement("div");
div16.setAttribute("class", "button");
div16.innerText = "+";
divSubElement.appendChild(div16);
let div17 = document.createElement("div");
div17.setAttribute("class", "button");
div17.innerText = "0";
divSubElement.appendChild(div17);
let div18 = document.createElement("div");
div18.setAttribute("class", "button");
div18.innerText = "00";
divSubElement.appendChild(div18);
let div19 = document.createElement("div");
div19.setAttribute("id", "equal");
div19.setAttribute("class", "button");
div19.innerText = "=";
divSubElement.appendChild(div19);

divMainElement.appendChild(divSubElement);

document.body.appendChild(sectionElement);

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});
