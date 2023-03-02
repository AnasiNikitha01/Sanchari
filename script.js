
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
});


let button = document.getElementById('submit');
let aeroplane = document.getElementById('aeroplane');
let passport = document.getElementById('passport');
let card=document.querySelector('.card');



button.addEventListener('click', () => {
    setTimeout(() => {
        button.innerHTML = "Let'S Go!...";
    }, 1000);

    setTimeout(() => {
        aeroplane.style.display='none';
    }, 1500);

    form.classList.add('translate');

   setTimeout(()=>{
  
    button.scrollIntoView({behavior: "smooth"});
  
   },2500)

    aeroplane.classList.add('animate')

    // fullname = firstname + lastname;

    

     setTimeout(()=>{
        card.style.display='block'
    },2000);

    let firstname=document.getElementById('first-name').value;
    let lastname=document.getElementById('last-name').value;
    let tel=document.getElementById('tel').value;
    let number=document.getElementById('number').value;
    let country1=document.getElementById('country1').value;
    
    const fullname=document.getElementById('fullname');
    const pnumber=document.getElementById('pnumber');
    const attendees=document.getElementById('attendees');
    const country=document.getElementById('country');
      
    fullname.innerHTML=firstname+''+lastname
    pnumber.innerHTML=tel;
    attendees.innerHTML=number;
    country.innerHTML=country1;

    let download=document.getElementById('download');
    setTimeout(()=>{
    download.style.display='block';
    },2000)

    let content=document.querySelector('.card').innerHTML
    
    download.addEventListener("click", () => {
        const opt = {
         
          margin: 0.5,
          filename: "download.pdf",
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 5 },
          jsPDF: { unit: "px", format: "letter", orientation: "portrait" },
        };
        html2pdf().from(content).set(opt).save();
      });
})

let contact=document.getElementById('contact');
let contact1=document.getElementById('contact1');

contact.addEventListener('click',function(){
    var section = document.querySelector('footer')
    section.scrollIntoView({behavior: "smooth"});
  
});


contact1.addEventListener('click',function(){
    var section = document.querySelector('footer')
    section.scrollIntoView({behavior: "smooth"});
  
});

let about=document.getElementById('about');
let about1=document.getElementById('about1');

about.addEventListener('click',function(){
    var section2 = document.querySelector('#section2')
    section2.scrollIntoView({behavior: "smooth"});
    
});
about1.addEventListener('click',function(){
    var section2 = document.querySelector('#section2')
    section2.scrollIntoView({behavior: "smooth"});
    
});

let explore=document.getElementById('explore');

explore.addEventListener('click',function(){
    var section3= document.querySelector('form')
    section3.scrollIntoView({behavior: "smooth"});

})

let top1=document.getElementById('top');

top1.addEventListener('click',function(){
    var header= document.querySelector('header')
    header.scrollIntoView({behavior: "smooth"});

})

let togglebtn=document.getElementById('toggle-btn');

let navtoggle=document.getElementById('nav-bar-toggle');

togglebtn.addEventListener('click',(event)=>{
    if(navtoggle.style.display==='none'){
        navtoggle.style.display='block';
        togglebtn.innerHTML='<i class="fa-regular fa-circle-xmark"></i>'
        event.stopPropagation();
    }
    else{
        event.stopPropagation();
    navtoggle.style.display='none';
    togglebtn.innerHTML='<i class="fa-solid fa-bars"></i>';
}

})

  


