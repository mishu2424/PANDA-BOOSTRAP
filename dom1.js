const h=document.getElementsByTagName('h2')
for(const v of h){
    console.log(v)
    v.style.color='lightblue'
}

document.getElementById('backpack').style.backgroundColor='red'

const c=document.getElementsByClassName('card')
for(const c1 of c){
    c1.style.borderRadius='30px'
}
function handler(){
    console.log('clicked')
}
// document.getElementById('b').addEventListener('click',function(){
//     const bt=document.getElementById('b')
//     bt.style.display='none'
// })
const d=document.getElementsByClassName('b1')
for(const d1 of d){
    d1.addEventListener('click',function(){
        d1.style.display='none'
    })
}
document.getElementById('input-email').addEventListener('keyup',function(event){
    const b2=document.getElementById('email-button')
    if(event.target.value=='email'){
        b2.removeAttribute('disabled')
    }
    else{
        b2.setAttribute('disabled',true)
    }
})
function newImg(){
    const t=document.getElementById('img1')
    t.src='images/bags/bag-2.png';
    
}
function oldImg(){
    document.getElementById('img1').src='images/bags/bag-3.png';
}
function colorChange(){
    const s=document.getElementById('ch');
    s.style.backgroundColor='red'
}