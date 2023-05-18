/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    };
    lowercaseStr1 = str1.toLowerCase();
    lowercaseStr2 = str2.toLowerCase();
    if (lowercaseStr1 === lowercaseStr2) {
        return false;
    };
    for (let i = 0; i < lowercaseStr1.length; i = i + 1) {
        if (!lowercaseStr2.includes(lowercaseStr1[i])) {
            return false;
        };
    };
    return true;
};

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('up', 'UP')); // false
