const main2=document.getElementById('main3');
const main=document.getElementById('merr');
const image=document.getElementById('logoimg');
const clickhere=document.getElementById('click');


function show(){
   main2.classList.add('main2');
   main.style.display='block';
   image.style.visibility='hidden';
   clickhere.style.display='none';
   
  
}

function hide(){
    main2.classList.remove('main2');
    main.style.display='none';
    image.style.visibility='visible';
    clickhere.style.display='block';
}