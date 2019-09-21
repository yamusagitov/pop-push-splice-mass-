let a = ['a', 'b', 'c', 'd', 'e'],
    b = [1, 2, 3, 4, 5];

//добавление элемента в массиве
let c = a.push('strike');

a.forEach((item) => {
    console.log(item);
})

//удаление элемента массива начиная с последнего
console.log (b.pop());
console.log(b);


//удаление элемента внутри массива

a.splice(3, 2);
console.log(a);
