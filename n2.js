            //Практическое 3 
//Задание 1

let a = [
        [{name: 'Mary', age: 23}, {name: 'Mike',age: 45}, {name: 'Nick',age: 11}],
        [{name: 'Adam',age: 56}, {name: 'Sara',age: 21}, {name: 'Don',age: 22}],
        [{name: 'Karl',age: 34}, {name: 'Marta',age: 76}, {name: 'John',age: 19}]
    ];


    let b = [];

    a.forEach(function (xl1, yl1) {//перебираем массив
        b[yl1] = [];
        xl1.forEach(function (xl2, yl2) {
            let obj = {};
			//копирование объектов
            Object.assign(obj, xl2);
			//добавляем в массив
            b[yl1].push(obj);
        });
    });

    //проверка, что начальный массив не меняется
    a[0][0].name = "test";
    a[0][0].age = 100;

    //вывод результатов
    console.log('Массив А (первая запись изменена ):')
    console.log(a);
    console.log('Массив B:')
    console.log(b);


//Задание 2
/*
function countBasketPrice(basket) {
    let totalPrice = 0;
    basket.forEach(function (item) {//проход по каждому элементу массива
        totalPrice += item.count * item.price;
    });
    return totalPrice;
}

function shop() {
    let NewProduct = {
        name: 'Наименование',
        price: 0,
        count: 0
    };
    let basket = [];

    for (let i = 1; i < 10; i++) {
        let obj = {};//всп 
        Object.assign(obj, NewProduct);//копирование в обдж
        obj.name = 'name' + i;
        obj.price = parseInt(Math.random() * 10000) / 100;
        obj.count = parseInt(Math.random() * 10) + 1;
        basket.push(obj);//добавление в массив
    }

    console.log('Корзина:');
    console.log(basket);
    console.log('Общая цена: ' + countBasketPrice(basket));
}
 shop();
 */
 
 //Задание 3
 /*
function empty() {
    for (let i = 0; i < 10; console.log(i++));
 }
empty();
*/

//Задание 4
/*
function star() {
    let line = '';
    for (let i = 0; i < 20; i++) {
        line += '*';
        console.log(line);
    }
}
 star();
 */
 
 
