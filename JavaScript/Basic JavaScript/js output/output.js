// Возможности отображения в JavaScript

/*
Запись в HTML-элемент с испольщованием 'innerHTML' Или 'innerText'.
Запись в HTML-вывод с использованием document.write().
Запись в окно оповещения с испоь=льзованием windows.alert().
Запись в консоль браузера с использованием console.log().
*/


// Использование innerHTML 
/*
Чтобы получить доступ  к HTML-элементу, можно испольщовать метод 
'document.getElementById(id)'

ИСпользуйте атрибут 'id' для идентификации HTML-элемента.

Затем используйте свойтсво 'innerHTML' для изменения HTML-содержимого элемента.
*/ 

 document.getElementById('innerhtml').innerHTML='innerHTML';

// Примечание
/* Изменение свойства 'innerHTML' элемента HTML - наиболее распространенный 
способ отображения данных в HTML.
*/



// ИСпользование 'innerText'
/* Чтобы получить доступ в HTML-элементу , используйте document.getElementById(id)

Затем используйте 'innerText' свойство для изменеия внутреннего текста
HTML- элемента
*/

document.getElementById('innertxt').innerText='innerText';

// Примечание 
/*
Используйте 'innerHTML', есди хотите изменить HTML-элемент.
Используйте 'innerText', если хотите изменить только обычный текст 
*/

// innerHTML
document.getElementById('innerHtml').innerHTML='<i>lorem</i>';

// innerText
document.getElementById('innertext').innerText='text';


// Использовнаие document.write()
/* В целях тестирования удобно использовать document.write() */

document.write('hello')

/* Исполльзование document.write() полсле звгрузки HTML-документа приведет 
к удалению всего существующего HTML. */

// Метод document.write() следует использовать только для тестирования.



// C помощью window.alert()
/* Вы можете использовать окно с предупреждением для отображения данных 
вы можете пропустить 'window' ключевое слово. */

window.alert('hello world!');

/*
В JavaScript обьект windiw является обектом глобальной области видимости.
Это означает , что переменные свойства и методы по умолчанию принадлежат обекту 
'windows'. Это также означает , что указание 'window' ключевого слова 
необзатаельно:
*/

alert('salom');


// С помошью console.log()

/* В целях отладки вы можете вызвать console.log() метод браузера для отображения
данных. 
*/

console.log('hello world');

// Печать в JavaScript 
/*
В JavaScript нет обекта print или методов печати.

Вы не можете получить доступ к устройствам вывода из JavaScript.

Единстевнное исключение - вы можете вызвать 'window.print()' метод в 
браузере , чтобы распечатать содержимое текущего окна.
*/

window.print()