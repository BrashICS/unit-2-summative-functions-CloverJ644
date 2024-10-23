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
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);
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
    let rpv_answer = round_user(rpv);
    document.getElementById("vol-a_result").textContent = `The volume of the rectangular prism is ${rpv_answer}`;
}

function rect_prism_area() {
    let l = Number(document.getElementById("input_length").value);
    let w = Number(document.getElementById("width").value);
    let h = Number(document.getElementById("height").value);
    let rpa = 2*((w*l)+(h*l)+(h*w));
    let rpa_answer = round_user(rpa);
    document.getElementById("vol-a_result").textContent = `The area of the rectangular prism is ${rpa_answer}`;
}

function sphere_volume(){
    let r = Number(document.getElementById("radius").value);
    let sv = (4/3)*(Math.PI)*(r**3);
    let sv_answer = round_user(sv);
    document.getElementById("vol-a_result").textContent = `The volume of the sphere is ${sv_answer}`;
}

function sphere_area(){
    let r = Number(document.getElementById("radius").value);
    let sa = 4*(Math.PI)*(r**2);
    let sa_answer = round_user(sa);
    document.getElementById("vol-a_result").textContent = `The area of the sphere is ${sa_answer}`;
}

function length_fnc(){
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let delx = delta(x2, y2)**2;
    let dely = delta(x1, y1)**2;
    //Unrnd for Unrounded
    let length_unrnd = Math.sqrt(delx + dely);
    let length_answer = round_user(length_unrnd);
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
    let y = a*(x)**2 + b*(x) - c;
    return `The vertex is at point ${x}, ${y}`;
}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let x1_unrnd = Number((-b) + (Math.sqrt((b)**2 - 4*(a)*(c))) / 2*(a))
    let x2_unrnd = Number((-b) - (Math.sqrt((b)**2 - 4*(a)*(c))) / 2*(a))
    let x1 = round_user(x1_unrnd);
    let x2 = round_user(x2_unrnd);
    document.getElementById("quadratic_output").textContent = `The zeros are ${x1} and ${x2}`;
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let x_unrnd = Number((-b) / (2*(a)));
    let y_unrnd = a*(x_unrnd)**2 + b*(x_unrnd) - c;
    let x = round_user(x_unrnd);
    let y = round_user(y_unrnd);
    document.getElementById("quadratic_output").textContent = `The vertex is ${x}, ${y}`;
    console.log(`The vertex is ${x}, ${y}`);
}

