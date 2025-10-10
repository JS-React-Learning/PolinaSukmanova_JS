let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 33;

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = fullPrice - rollback;

let splitScreens = screens.toLowerCase().split(", ");
let percent = fullPrice * (rollback / 100);

fullPrice > 30000
  ? console.log("Даем скидку в 10%")
  : fullPrice >= 15000 && fullPrice <= 30000
  ? console.log("Даем скидку в 5%")
  : fullPrice < 15000 && fullPrice >= 0
  ? console.log("Скидка не предусмотрена")
  : fullPrice < 0
  ? console.log("Что то пошло не так")
  : "";

console.log("title is", typeof title);
console.log("fullPrice is", typeof fullPrice);
console.log("adaptive is", typeof adaptive);

console.log("creens length", screens.length);

console.log(`Стоимость верстки экранов ${screenPrice} рублей`);
console.log(`Стоимость разработки сайта ${fullPrice} рублей`);

console.log(splitScreens);
console.log(percent);

console.log(servicePercentPrice);
