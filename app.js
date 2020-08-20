const area=document.querySelector("#intro1");
const text=["Hi,My name is Saad Ali","I am a Web/Javascript Developer you need"]
const typingdelay=100;
const erasingdelay=60;
const newtext=2000;
let textindex=0;
let chartext=0;

function type()
{
    
    if(chartext<text[textindex].length)
    {
        area.textContent+=text[textindex].charAt(chartext);
        chartext++;
        setTimeout(type,typingdelay);
    }
    else
    {
        setTimeout(erase,newtext)
    }
}
function erase()
{
    
    if(chartext>0)
    {
        area.textContent=text[textindex].substring(0,chartext-1)
        chartext--;
        setTimeout(erase,erasingdelay);
    }
    else
    {
        textindex++;
        if(textindex>=text.length) {textindex=0;}
        type()

    }
    
}
document.addEventListener("DOMContentLoaded",()=>
{
    setTimeout(type,newtext)
})

var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
}