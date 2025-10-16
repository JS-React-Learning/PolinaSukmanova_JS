"use strict";

let allServicePrices;
let fullPrice;
let servicePercentPrice;

let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 33;

// let title = " КаЛьКулятор Верстки";
// let screens = "Простые, сложные";
// let screenPrice = 25000;
// let adaptive = true;
// let service1 = "Проект2";
// let servicePrice1 = 50;
// let service2 = "Проект3";
// let servicePrice2 = 600;

const showTypeOf = function (variable) {
  console.log(`${variable} is`, typeof variable);
};

const getRollbackMessage = function (price) {
  if (price >= 30000) {
    return "Даем скидку в 10%";
  } else if (price >= 15000 && price < 30000) {
    return "Даем скидку в 5%";
  } else if (price >= 0 && price < 15000) {
    return "Скидка не предусмотрена";
  } else {
    return "Что то пошло не так";
  }
};

const getAllServicePrices = function (...parametr) {
  return parametr.reduce((a, b) => a + b);
};

function getFullPrice(...parametr) {
  return parametr.reduce((a, b) => a * b);
}

function getTitle(title) {
  return title.trim()[0].toUpperCase() + title.trim().toLowerCase().slice(1);
}

function getServicePercentPrices(fullPrice, rollback) {
  return Math.ceil(fullPrice - fullPrice * (rollback / 100));
}

allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log(allServicePrices);
console.log(fullPrice);
console.log(title);
console.log(servicePercentPrice);

console.log(getRollbackMessage(fullPrice));

console.log(screens.toLowerCase().split(", "));
