const paragraph = document.getElementsByTagName('p');
const sectionA = document.getElementById('a');
const sectionB = document.getElementById('b');
const sectionC = document.getElementById('c');


// Button ini digunakan untuk merubah warna background semua paragraph
const btnSatu = document.getElementById('buttonSatu');
btnSatu.addEventListener('click',function(){
    for(let i = 0;i < paragraph.length;i++){
        paragraph[i].style.backgroundColor = 'rgb(116, 185, 255)' ;
    }
});

// Button ini digunakan untuk merubah warna background color dan warna text button "Dua"
const btnDua = document.getElementById('buttonDua');
btnDua.addEventListener('click',function(){
    btnDua.style.backgroundColor = '#00b894';
    btnDua.style.color = 'white';
});

// Button ini digunakan untuk merubah font-family dan warna text semua paragraph
const btnTiga = document.getElementById('buttonTiga');
btnTiga.addEventListener('click',function(){
    for(let i = 0;i < paragraph.length;i++){
        paragraph[i].style.fontFamily = "Comic Sans MS";
        paragraph[i].style.color = '#ED4C67';
    }
});

// Button ini digunakan untuk merubah font-size semua paragraph
const btnEmpat = document.getElementById('buttonEmpat');
btnEmpat.addEventListener('click',function(){
    for(let i = 0;i < paragraph.length;i++){
        paragraph[i].style.fontSize = '35px';
    }
});

// Button ini digunakan untuk merubah container background-color
const btnLima = document.getElementById('buttonLima');
btnLima.addEventListener('click',function(){
    const wrapper = document.getElementById('container');
    wrapper.style.backgroundColor = '#D980FA';
});

// Button ini digunakan untuk merubah tag "p" pada class p1 menjadi "h2"
const btnEnam = document.getElementById('buttonEnam');
btnEnam.addEventListener('click',function(){
    const newH2 = document.createElement('h2');
    const isiNewH2 = document.createTextNode('Belajar Javascript di Dojobox');
    newH2.appendChild(isiNewH2);

    const paragraphSectionA = sectionA.querySelector('.p1');
    sectionA.replaceChild(newH2,paragraphSectionA);

});

// Button ini digunakan untuk menambahkan satu nama mentor baru dan menghapus nama mentor pertama
const btnTujuh = document.getElementById('buttonTujuh');
btnTujuh.addEventListener('click',function(){
    const newMentor = document.createElement('li');
    const isiNewMentor = document.createTextNode('Hanif Razin');
    newMentor.appendChild(isiNewMentor);

    const elementUl = sectionB.querySelector('#b ul');
    elementUl.appendChild(newMentor);
    
    const jojo = elementUl.querySelector('li:nth-child(1)');
    elementUl.removeChild(jojo);
});

// Button ini digunakan untuk mengganti text judul "DOOJOBOX.id" menjadi "Post Test"
const btnDelapan = document.getElementById('buttonDelapan');
btnDelapan.addEventListener('click',function(){
    const judul = document.getElementById('judul');
    judul.innerHTML = 'Post Test';
});

// Button ini digunakan untuk menghapus link
const btnSembilan = document.getElementById('buttonSembilan');
btnSembilan.addEventListener('click',function(){
    const anchor = sectionA.querySelector('a');
    sectionA.removeChild(anchor);
});

// Button ini digunakan untuk menambah link ke github masing masing
const btnSepuluh = document.getElementById('buttonSepuluh');
btnSepuluh.addEventListener('click',function(){
    const anchor = document.createElement('a');
    const newAnchor = document.createTextNode('Github Saya');
    anchor.appendChild(newAnchor);
    anchor.href = "https://github.com/hanifrazin/PostTest_Sprint3_Automation";
    sectionA.appendChild(anchor);
});