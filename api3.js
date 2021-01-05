
var q;
var a;
var card=document.getElementById('svgWrapper');
var dict=document.getElementById('dict');
var lode=document.getElementById('lode');
dict.addEventListener('click',e=>{
    e.preventDefault();
    window.location.href='index.html';
    window.history.back();

});
const getQuote=async(rand)=>{
    const api='https://type.fit/api/quotes';
    const response=await fetch(api);
    const data=await response.json();
    console.log(data[rand]);
    return data[rand];

}
function displayQuote(){
setTimeout(function() {
    const index= Math.floor(Math.random()*1643);
console.log(index);
var quote=document.getElementById('dis');
var auth=document.getElementById('title');
getQuote(index).then(data=>{
    lode.classList.add('hide');
    card.classList.remove('sho');
    
    var author='-'+data.author;
    if(data.author==null){
        author='- AnilKumar';
    }
    q=data.text.substring(0,data.text.length-1);
    quote.innerText=data.text;
    a="    -"+author.substring(1,author.length);
    auth.innerText=author;

})
},3000);
}

// document.getElementById('share').addEventListener('click',e=>{
//  const url=`whatsapp://send?text=${q}${a}`;
//         window.location.href=url;
// });
var dd=document.getElementById('fav');
var sss=document.getElementById('myDropdown');
dd.addEventListener('click',e=>{
    //console.log("ya");
sss.classList.remove('hide');
});
sss.addEventListener('click',e=>{
    const url=`whatsapp://send?text=${q}${a}`;
    window.location.href=url;


});

window.addEventListener('click',e=>{
    if (e.target.id!='fav' && e.target.id!='pop') {
        var dropdowns = document.getElementById("myDropdown");
            dropdowns.classList.add('hide');   
        
      }
});
