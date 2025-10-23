"use strict";

let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 33;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num) && isFinite(num));
};

const asking = function () {
  let question;

  title = prompt("Как называется ваш проект?", " КаЛьКулятор Верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, сложные");

  do {
    question = prompt("Сколько будет стоить данная работа?", 25000);

    if (question === null) {
      question = 0;
      break;
    }

    question.trim();
  } while (!isNumber(question));

  screenPrice = parseFloat(question);
  adaptive = confirm("Нужен ли адаптив на сайте?", true);
};

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

const getAllServicePrices = function () {
  let sum = 0;
  let question;

  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      service1 = prompt("Какой дополнительный тип услуги нужен?", "Услуга1");
    } else if (i === 1) {
      service2 = prompt("Какой дополнительный тип услуги нужен?", "Услуга2");
    }

    do {
      question = prompt("Сколько это будет стоить?", 100);

      if (question === null) {
        question = 0;
        break;
      }

      question.trim();
    } while (!isNumber(question));

    sum += parseFloat(question);
  }

  return sum;
  // return parametr.reduce((a, b) => a + b);
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

asking();

allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice, allServicePrices);
title = getTitle(title);
servicePercentPrice = getServicePercentPrices(fullPrice, rollback);

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(fullPrice);
console.log(title);
console.log(servicePercentPrice);

console.log(getRollbackMessage(fullPrice));

console.log(screens.toLowerCase().split(", "));
