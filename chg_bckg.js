// Code to change Background colors of dashboard by using our 2 buttons

let root = document.documentElement;

const sun_btn = document.getElementsByClassName("icon sun")[0];
const night_btn = document.getElementsByClassName("icon night")[0];


const header = document.querySelector("header");
const sideb = document.querySelector("nav");
const content = document.getElementsByClassName("main-content")[0];

const sun_header_color = "#ffffff";
const sun_sideb_color = "#4a0058";
const sun_content_color = "#e5ebf3";

const night_header_color = "#505050";
const night_sideb_color = "#c4ff23";
const night_content_color = "#222222";


function Chg_backg(btn_name){
    if (btn_name == "day") {
        root.style.setProperty('--header-back-color', sun_header_color);
        root.style.setProperty('--content-back-color', sun_content_color);
        root.style.setProperty('--sideb-back-color', sun_sideb_color);
        root.style.setProperty('--subtext-color', "rgb(95, 95, 95)");

        root.style.color = "#fff";
        const btn_header = header.getElementsByClassName("btn-gen")[0].children
        for (const elem of btn_header) {
            elem.style.color = "aliceblue" ;
          };
        sideb.style.color = "aliceblue";
        let icons =  sideb.getElementsByClassName("icon")
        for (const elem of icons) {
            elem.style["-webkit-filter"] = "invert(100%)" ;
          };

        root.style.color = "black"


        night_btn.style.cursor = "pointer";
        night_btn.style["-webkit-filter"] = "invert(0%)" 

        sun_btn.style.cursor = "not-allowed";
        sun_btn.style["-webkit-filter"] = "invert(50%)" 
    }
    else {
        root.style.setProperty('--header-back-color', night_header_color);
        root.style.setProperty('--content-back-color', night_content_color);
        root.style.setProperty('--sideb-back-color', night_sideb_color);
        root.style.setProperty('--subtext-color', "white");

        root.style.color = "aliceblue";
        const btn_header = header.getElementsByClassName("btn-gen")[0].children
        for (const elem of btn_header) {
            elem.style.color = "black" ;
          };
        sideb.style.color = "black";
        let icons =  sideb.getElementsByClassName("icon")
        for (const elem of icons) {
            elem.style["-webkit-filter"] = "invert(0%)" ;
          };
        

          

        root.style.color = "white"

        sun_btn.style.cursor = "pointer";
        sun_btn.style["-webkit-filter"] = "invert(0%)" 

        night_btn.style.cursor = "not-allowed";
        night_btn.style["-webkit-filter"] = "invert(50%)" 
    }
}


sun_btn.addEventListener("click", e => {
    let cursor = window.getComputedStyle(e.target)["cursor"]
    if (cursor != "not-allowed") {
        Chg_backg("day");
    }
});
night_btn.addEventListener("click", e => {
    let cursor = window.getComputedStyle(e.target)["cursor"]
    if (cursor != "not-allowed") {
        Chg_backg("night");
    }
});