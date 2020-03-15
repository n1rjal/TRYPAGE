var quotes=["“Talk is cheap. Show me the code.”― Linus Torvalds",
" “I am not a great programmer I am just a good programmer with great habits”-Kent Beck",
" “Give a man a program frustrate him for a day.Teach a man to program frustrate him for a lifetime.”― Muhammad Waseem",
" “How you look at it is pretty much how you will see it”― Rasheed Ogunlaru "
]

var i = 0;
var txt = "Let's do some programming! -Nirjal Paudel[N1] ";
var speed = 50;

function typeWriter() {
    
  if (i <= txt.length) {
    document.getElementById("img").innerHTML += txt.charAt(i);
    i++;
    if (i==(txt.length)){
        i=0;
        document.getElementById("img").innerHTML ="";    
    }
    setTimeout(typeWriter,300);
  }
}
function manageeQuote(){
    var i=Math.ceil(Math.random(1)*4);
    i--;
    x=quotes[i];
    //setInterval(displayMSG,4000,x);
    document.getElementById("quote").innerHTML="<i>"+x+"</i>";
}


window.onload=manageeQuote();
window.onload=typeWriter()