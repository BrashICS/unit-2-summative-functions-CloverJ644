/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("rpv").addEventListener("click", rect_prism_volume);
document.getElementById("rpa").addEventListener("click", rect_prism_area);
document.getElementById("sv").addEventListener("click", sphere_volume);
document.getElementById("sa").addEventListener("click", sphere_area);
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
document.getElementById("c_length").addEventListener("click", length_fnc);
document.getElementById("c_slope").addEventListener("click", slope_fnc);
document.getElementById("c_midpoint").addEventListener("click", midpoint_fnc);
/*** Functions ***/

// Round to the nearest `decimals` number of decimals
function round(value, decimals) {
    return Math.round(value * 10**decimals) / 10**decimals;
}

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let d = Number(document.getElementById("rounding").value);
    let round_answer = Math.round(value*10**d) / 10**d;
    return round_answer;
}

function delta(a, b){
    return (a - b);
}

function slope(x1, y1, x2, y2){
    let m = delta(y2, y1) / delta(x2, x1);
    return m;
}

function average(n1, n2){
    let avg = (n1 + n2) / 2;
    return avg;
}

function length(x1, y1, x2, y2){
    let delx = (delta(x2, y2))**2;
    let dely = (delta(x1, y1))**2;
    let length_answer = Math.sqrt(delx + dely);
    return length_answer;
}

function rect_prism_volume() {
    let l = Number(document.getElementById("input_length").value);
    let w = Number(document.getElementById("width").value);
    let h = Number(document.getElementById("height").value);
    let rpv = w*h*l;
    let d = Number(document.getElementById("rounding").value);
    let rpv_answer = Math.round(rpv*10**d) / 10**d;
    document.getElementById("vol-a_result").textContent = `The volume of the rectangular prism is ${rpv_answer}`;
}

function rect_prism_area() {
    let l = Number(document.getElementById("input_length").value);
    let w = Number(document.getElementById("width").value);
    let h = Number(document.getElementById("height").value);
    let rpa = 2*((w*l)+(h*l)+(h*w));
    let d = Number(document.getElementById("rounding").value);
    let rpa_answer = Math.round(rpa*10**d) / 10**d;
    document.getElementById("vol-a_result").textContent = `The area of the rectangular prism is ${rpa_answer}`;
}

function sphere_volume(){
    let r = Number(document.getElementById("radius").value);
    let sv = (4/3)*(Math.PI)*(r**3);
    let d = Number(document.getElementById("rounding").value);
    let sv_answer = Math.round(sv*10**d) / 10**d;
    document.getElementById("vol-a_result").textContent = `The volume of the sphere is ${sv_answer}`;
}

function sphere_area(){
    let r = Number(document.getElementById("radius").value);
    let sa = 4*(Math.PI)*(r**2);
    let d = Number(document.getElementById("rounding").value);
    let sa_answer = Math.round(sa*10**d) / 10**d;
    document.getElementById("vol-a_result").textContent = `The area of the sphere is ${sa_answer}`;
}

function length_fnc(){
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let delx = delta(x2, y2)**2;
    let dely = delta(x1, y1)**2;
    let length_answer = Math.sqrt(delx + dely);
    document.getElementById("calc_result").textContent = `The length of the line is ${length_answer}`;
}

function slope_fnc(){
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let delx = delta(x2, x1)
    let dely = delta(y2, y1);
    let m = Number((dely) / (delx))
    document.getElementById("calc_result").textContent = `The slope of the line is ${m}`;
}

function midpoint_fnc(){
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let mx = average(x1, x2);
    let my = average(y1, y2);
    document.getElementById("calc_result").textContent = `The midpoint of the line is ${mx}, ${my}`;
}


// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
    
}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {

}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

