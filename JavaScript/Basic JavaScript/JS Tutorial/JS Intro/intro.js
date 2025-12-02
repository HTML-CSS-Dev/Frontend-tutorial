// Что может javascript ?

/*
JavaScript - это язык программирования для веб-разработки.
Он может вычислять , обрабатывать и проверять данные 
Он может обновлять и изменять как HTML , так и CSS.
*/

// JavaScript может изменять содержиме HTML.
/* 
Одним из многих методов JavaScript для работы с HTML является getElementById().
*/ 

document.getElementById('demo').innerHTML='hello world';

// JavaScript подердивает как двойные , так и одинарные кавычки.

document.getElementById('demos').innerHTML="salom dunyo";


// JavaScript может изменять значения атрибутов HTML.
document.getElementById('img').src='trash.svg';


// JavaScript может изменять стили HTML/CSS

document.getElementById('color').style.color='red';
document.getElementById('color').style.background='green';



// JavaScript может скрыть элементы
document.getElementById('hidden').style.display='none';
document.getElementById('block').style.visibility='visible';