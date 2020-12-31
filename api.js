//  font-family: 'Montserrat Alternates', sans-serif;
const key='fadee8fa-5938-44f8-948a-d4f22d7d480a';

const getMeaning=async(word)=>{

    const baseurl=`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${key}`;

    const response=await fetch(baseurl);
    const data=await response.json();

  
    // if(data[0].hwi.prs){
    // //console.log(data[0].hwi.prs[0].mw);
    // }
    // //console.log(data[0].fl);
   
    // console.log(data[0].shortdef[0]);
    // if(data[0].syns){
    // console.log(data[0].syns[0].pl);
    // console.log(data[0].syns[0].pt[0][1]);
    // }
    return(data[0]);

};

if(localStorage.getItem('saved')==null){
    localStorage.setItem('saved','0');
}


var inputField=document.getElementById('search');
const form=document.getElementById('form');
const section=document.getElementById('words');




// form.addEventListener('submit', e=>{

// e.preventDefault();
// section.classList.add('hide');
// go.classList.add('hide');
// mean.classList.remove('hide');
// getMeaning(inputField.value).then(data=>{
//                 if(data.meta){
//                     console.log("meaning:",data);
//                     var card=document.getElementById(88);
//     const html=`
//     <h3>${inputField.value}</h3>
//     <p>/${data.hwi.prs[0].mw}/</p>
//     <p style="font-weight:bold;">${data.fl}</p>
//     <p>${data.shortdef[0]}</p>`;
//                   card.innerHTML=html;
//                 }
//                 else{
//                     console.log("meaning:",data);
//                     var card=document.getElementById(88);
//     const html=`
//     <h3>${inputField.value}</h3>
//     <p>${data}</p>`;
//                   card.innerHTML=html;
//                 }
               
//             }).catch(err=>{
//                 console.log(err);
             
//             });
        
// });

var mean=document.getElementById('mean');
var go=document.getElementById('go');
var cancel=document.getElementById('close');

go.addEventListener('click',e=>{
    e.preventDefault();
    go.classList.add('hide');
    cancel.classList.remove('hide');
    section.classList.add('hide');

    getMeaning(inputField.value).then(data=>{
        mean.classList.remove('hide');
        if(data.meta){
            // console.log("meaning:",data);
            
            var card=document.getElementById('88');
const html=`
<h3>${inputField.value}</h3>
<p>/${data.hwi.prs[0].mw}/</p>
<p style="font-weight:bold;">${data.fl}</p>
<p>${data.shortdef[0]}</p>
<i class="fas fa-heart save" id="s88"></i>
<div class="button">
<ul> 
  <li class="li88">
    <a >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span  class="fa fa-left link"   id="link88">read more</span>
    </a> 
  </li>
</ul> 
</div>`;
          card.innerHTML=html;
        }
        else{
            // console.log("meaning:",data);
            var card=document.getElementById('88');
const html=`
<h3>${inputField.value}</h3>
<p>${data}</p>
<i class="fas fa-heart save" id="s88"></i>
<div class="button">
<ul> 
  <li class="li88">
    <a >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span  class="fa fa-left link"   id="link88">read more</span>
    </a> 
  </li>
</ul> 
</div>`;
          card.innerHTML=html;
        }
       
    }).catch(err=>{
        //console.log(err);
        // var card=document.getElementById('88');
        // var ele=document.createElement("img");
        // ele.src='noword.jpg';
const nowords=`<div class="flex-col" id="box88">
<div class="cards four" id="88" style="border-top: 5px crimson solid;">
<img src="noword.jpg">  
</div>
</div>`;
var s=document.getElementById('s');
s.innerHTML=nowords;
     
    });
   
});






cancel.addEventListener('click',e=>{
    e.preventDefault();
inputField.value='';
go.classList.add('hide');
cancel.classList.add('hide');
section.classList.remove('hide');
mean.classList.add('hide');

});

// getMeaning('invade').then(data=>{
//     //console.log(data);
// });



  

 

window.addEventListener('click',e=>{
if(e.target.classList.contains('save')&&!e.target.classList.contains('red')){
    //console.log(e.target.id);
  var item= document.getElementById(e.target.id);
  var id=e.target.id;
var index=id.toString().substring(1,id.length);
  item.classList.add('red');
  var x=parseInt(localStorage.getItem('saved'));
  //console.log(x);
  x++;
    item.style.color='red';
    var card=document.getElementById(index);
var newkey=x.toString();
const box=`${card.innerHTML}
<i class="far fa-trash-alt delete" id=${newkey}></i>`;
  
    localStorage.setItem(newkey,box);
    localStorage.setItem('saved',x.toString());
    //console.log(localStorage.getItem(newkey));
}
// else if(e.target.classList.contains('save')&&e.target.classList.contains('red')){
//     //console.log(e.target.id);
//     var item=  document.getElementById(e.target.id);
//     var id=e.target.id;
//     var index=id.toString().substring(1,id.length);
//     item.classList.remove('red');
//     item.style.color='black';
//     var x=parseInt(localStorage.getItem('saved'));
//    x--;
//     localStorage.removeItem(index);
//     localStorage.setItem('saved',x.toString());
//     //console.log(localStorage.getItem(index));
// }



if (e.target.id!='fav' && e.target.id!='pop') {
    var dropdowns = document.getElementById("myDropdown");
        dropdowns.classList.add('hide');   
    
  }

  if(e.target.classList.contains('link')){
      //console.log(e.target.id.substring(4,e.target.length));
  var idd=e.target.id.substring(4,e.target.length);
  var card=document.getElementById(idd);

//console.log(card.querySelector('h3').innerText);
var word=card.querySelector('h3').innerText;
window.location.href=`https://www.google.com/search?q=${word}`;
  }
});



  


var quot=document.getElementById('quote');
quot.addEventListener('click',e=>{
  window.history.back();

});

var dict=document.getElementById('dict');
dict.addEventListener('click',e=>{
  window.history.back();
   window.history.back();

});

var dd=document.getElementById('fav');
var sss=document.getElementById('myDropdown');
dd.addEventListener('click',e=>{
    //console.log("ya");
sss.classList.remove('hide');
});
sss.addEventListener('click',e=>{
window.history.back();

});
var numArray=[];
//console.log(words.length);
function generateArray(){
for(var i=0;i<12;i++){
    var x=Math.floor(Math.random()*370101);
    numArray[i]=x; 
}
}

//console.log(numArray);
var urls=[
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[0]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[1]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[2]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[3]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[4]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[5]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[6]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[7]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[8]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[9]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[10]]}?key=${key}`,
`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${words[numArray[11]]}?key=${key}`,]

for(var i=0;i<12;i++){
    //console.log(words[numArray[i]]);
}


Promise.all(urls.map(u=> fetch(u)))
.then(responses=>Promise.all(responses.map(res=> res.json())))
.then(mean=>{
    var num=0;
    section.classList.remove('hide');
    mean.forEach(data=>{
        // meanings.push(mean);
        // //console.log(meanings);
        //console.log(num);
        if(data[0].meta){
        //console.log("meaning:",data[0]);
        const card=document.getElementById(num.toString());
        const id1=`s${num}`;
            const id2=`li${num}`;
            const id3=`link${num}`;
            const html=`
            <h3>${words[numArray[num]]}</h3>
            <p>/${data[0].hwi.prs[0].mw}/</p>
            <p style="font-weight:bold;">${data[0].fl}</p>
            <p>${data[0].shortdef[0]}</p>
            <i class="fas fa-heart save" id=${id1}></i>
            <div class="button">
            <ul> 
              <li class=${id2}>
                <a >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span  class="fa fa-left link"   id=${id3}>read more</span>
                </a> 
              </li>
            </ul> 
            </div>`;
                              card.innerHTML=html;
                            }
        else{
            //console.log("meaning:",data);
            const card=document.getElementById(num.toString());
            const id1=`s${num}`;
            const id2=`li${num}`;
            const id3=`link${num}`;
            const html=`
            <h3>${words[numArray[num]]}</h3>
            <p>${data[0]}</p>
            <i class="fas fa-heart save" id=${id1}></i>
            <div class="button">
            <ul> 
            <li class=${id2}>
            <a >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span  class="fa fa-left link"   id=${id3}>read more</span>
            </a> 
            </li>
            </ul> 
            </div>`;
         card.innerHTML=html;
             }
                           
        num++;
    })
    
}).catch(err=>{
      section.classList.remove('hide');
        //  const card=document.getElementById(num.toString());
        // //console.log(err);
        // card.innerHTML=err;
        //location.reload();
        generateArray();
      
                 
 });





// //card0
// var x=Math.floor(Math.random()*370101);
//   var word=words[x];
//   //console.log(word);

//  getMeaning(word).then(data=>{
//                 if(data.meta){
//                     //console.log("meaning:",data);
//                     const card=document.getElementById('0');
//     const html=`
// <h3>${word}</h3>
// <p>/${data.hwi.prs[0].mw}/</p>
// <p style="font-weight:bold;">${data.fl}</p>
// <p>${data.shortdef[0]}</p>
// <i class="fas fa-heart save" id="s0"></i>
// <div class="button">
// <ul> 
// <li class="zeroli">
// <a href="#">
// <span></span>
// <span></span>
// <span></span>
// <span></span>
// <span  class="fa fa-left link"   id="link0">read more</span>
// </a> 
// </li>
// </ul> 
// </div>`;
//                   card.innerHTML=html;
//                 }
//                 else{
//                     //console.log("meaning:",data);
//                     const card=document.getElementById('0');
// const html=`
// <h3>${word}</h3>
// <p>${data}</p>
// <i class="fas fa-heart save" id="s0"></i>
// <div class="button">
// <ul> 
// <li class="zeroli">
// <a href="#">
// <span></span>
// <span></span>
// <span></span>
// <span></span>
// <span  class="fa fa-left link"   id="link0">read more</span>
// </a> 
// </li>
// </ul> 
// </div>`;
//                   card.innerHTML=html;
//                 }
               
//             }).catch(err=>{
//                 const card=document.getElementById('0');
//                 //console.log(err);
//                 card.innerHTML=err;
             
//             });


// //card1
// var x=Math.floor(Math.random()*370101);
// var word=words[x];
// //console.log(word);

//     getMeaning(word).then(data=>{
//                 if(data.meta){
//                     //console.log("meaning:",data);
//                     const card=document.getElementById('1');
//     const html=`
// <h3>${word}</h3>
// <p>/${data.hwi.prs[0].mw}/</p>
// <p style="font-weight:bold;">${data.fl}</p>
// <p>${data.shortdef[0]}</p>
// <i class="fas fa-heart save" id="s1"></i>
// <div class="button">
// <ul> 
// <li class="oneli">
// <a href="#">
// <span></span>
// <span></span>
// <span></span>
// <span></span>
// <span  class="fa fa-left link"   id="link1">read more</span>
// </a> 
// </li>
// </ul> 
// </div>`;
//                 card.innerHTML=html;
//                 }
//                 else{
//                     //console.log("meaning:",data);
//                     const card=document.getElementById('1');
// const html=`
// <h3>${word}</h3>
// <p>${data}</p>
// <i class="fas fa-heart save" id="s1"></i>
// <div class="button">
// <ul> 
// <li class="oneli">
// <a href="#">
// <span></span>
// <span></span>
// <span></span>
// <span></span>
// <span  class="fa fa-left link"   id="link1">read more</span>
// </a> 
// </li>
// </ul> 
// </div>`;
//                 card.innerHTML=html;
//                 }
                
//             }).catch(err=>{
//                 //console.log(err);
//                 card.innerHTML=err;
            
//             });

// //card2
// var x=Math.floor(Math.random()*370101);
//   var word=words[x];
//   //console.log(word);


//       getMeaning(word).then(data=>{
//                 if(data.meta){
//                     //console.log("meaning:",data);
//                     const card=document.getElementById('2');
//     const html=`
// <h3>${word}</h3>
// <p>/${data.hwi.prs[0].mw}/</p>
// <p style="font-weight:bold;">${data.fl}</p>
// <p>${data.shortdef[0]}</p>
// <i class="fas fa-heart save" id="s2"></i>
// <div class="button">
// <ul> 
// <li class="twoli">
// <a href="#">
// <span></span>
// <span></span>
// <span></span>
// <span></span>
// <span  class="fa fa-left link"   id="link2">read more</span>
// </a> 
// </li>
// </ul> 
// </div>`;
//                   card.innerHTML=html;
//                 }
//                 else{
//                     //console.log("meaning:",data);
//                     const card=document.getElementById('2');
// const html=`
// <h3>${word}</h3>
// <p>${data}</p>
// <i class="fas fa-heart save" id="s2"></i>
// <div class="button">
// <ul> 
// <li class="twoli">
// <a href="#">
// <span></span>
// <span></span>
// <span></span>
// <span></span>
// <span  class="fa fa-left link"   id="link2">read more</span>
// </a> 
// </li>
// </ul> 
// </div>`;
//                   card.innerHTML=html;
//                 }
               
//             }).catch(err=>{
//                 //console.log(err);
//                 const card=document.getElementById('2');
//                 card.innerHTML=err;
             
//             });
