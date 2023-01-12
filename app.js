const getcolor=()=>{
    //hex code
    const randomNumber=Math.floor( Math.random()*16777215);
    // console.log(randomNumber);
    const randomcode='#'+randomNumber.toString(16);
    // console.log(randomNumber,randomcode);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerHTML=randomcode;

    //antomatic copy(clipboard)
    navigator.clipboard.writeText(randomcode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
//initial call
getcolor();