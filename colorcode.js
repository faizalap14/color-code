const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap = document.getElementById("wrap")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']  // color 6 letters

function out()
{
    let hexcolor = '#'  // code start #
    for (let i = 1; i <= 6; i++) {
        hexcolor += randhexvalue()  
    }
    // console.log(hexcolor)  print code color
    document.getElementById("wrap").style.backgroundColor = hexcolor;  // change background color
    document.getElementById("color").innerHTML = hexcolor;  // change code color text
    // wrap.style.backgroundColor = hexcolor;  second option
    // colortext.innerHTML = hexcolor;
}

function randhexvalue() {
    let randomindex = Math.floor(Math.random() * 16)
    return hex[randomindex]  // random 6 letters and numbers
} 