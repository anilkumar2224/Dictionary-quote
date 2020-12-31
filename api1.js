var sec=document.getElementById('sec');
//console.log(localStorage.getItem('saved'));
var a=0;
for(var i=1;i<=parseInt(localStorage.getItem('saved'));i++){
    if(localStorage.getItem(i.toString())!=null){



       
const html=`<div class="flex-col"><div class="cards four" id=${i}>${localStorage.getItem(i.toString())}</div></div>`;
//console.log("uo");
sec.innerHTML+=html;
a=1;
    }
//console.log(sec);

}
if(a==0){
 
    sec.innerHTML='<div style="width:100%;text-align:center;">No Saved Words</div>';
}
var back=document.getElementById('back');

back.addEventListener('click',e=>{
e.preventDefault();
window.history.back();

window.location.href='index.html';
window.history.back();
});


window.addEventListener('click',e=>{
if(e.target.classList.contains('delete')){
    var id=e.target.id;
    if (confirm("Do you want to delete?")) {
        localStorage.removeItem(id.toString());
        location.reload();                       
         } 
   
}


if(e.target.classList.contains('link')){
    //console.log(e.path[5].querySelector('h3').innerText);
var word=e.path[5].querySelector('h3').innerText;
window.location.href=`https://www.google.com/search?q=${word}`;
}
});