let title = "Мониторррр";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 13;
let rollback = 33;
let fullPrice = 313;
let adaptive = false;

let splitScreens = screens.toLowerCase().split(", ");
let percent = fullPrice * (rollback / 100);

console.log("title is", typeof title);
console.log("fullPrice is", typeof fullPrice);
console.log("adaptive is", typeof adaptive);

console.log("creens length", screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(splitScreens);
console.log(percent);
