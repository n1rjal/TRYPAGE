
var quotes=["“Talk is cheap. Show me the code.”― Linus Torvalds",
" “I am not a great programmer I am just a good programmer with great habits”-Kent Beck",
" “Give a man a program frustrate him for a day.Teach a man to program frustrate him for a lifetime.”― Muhammad Waseem",
" “How you look at it is pretty much how you will see it”― Rasheed Ogunlaru "
]


function manageeQuote(){
    var i=Math.ceil(Math.random(1)*4);
    i--;
    x=quotes[i];
    //setInterval(displayMSG,4000,x);
    document.getElementById("quote").innerHTML="<i>"+x+"</i>";

}


window.onload=manageeQuote();
