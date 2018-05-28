// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//     Возвращает true, если все аргументы, кроме первого входят в первый.
//     Первым всегда должен быть массив.
type snb = string|number|boolean;

function isInArray(arr: snb[], ...args: snb[]): boolean {
    return args.every((val) => arr.indexOf(val) > -1);
}

// 2)
// писать функцию summator(), которая сумирует переданые ей аргументы.
//     Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

type sn = string|number;

function summator(...args: sn[]): sn {
    return args.reduce((sum, current) => {
        if (typeof current === 'string') {
            return sum + current;
        } else {
            if (typeof sum === 'string') {
                return sum + current;
            } else {
                return sum + current;
            }
        }
    });
}

// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//     и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//     Порядок элементов результирующего массива должен совпадать с порядком,
//     в котором они встречаются в оригинальной структуре.

function getUnique(...args: snb[]): snb[] {
    return args.filter((val, i, arr) => arr.indexOf(val) === i);
}

// 4)
// Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
// цифры и специальные символы должны остаться на месте
// s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
// s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
// s1tar3t 2   low5  ->  t1rat3s 2   wol5

function flipWords(statetement: string): string {
    const result: string[] = [];
    const parts: string[] = statetement.split(' ');
    parts.forEach((part) => {
        const flip: string[] = [];
        for (let i = 0; i < part.length; i++) {
            if (part[i].toUpperCase() < 'A' || part[i].toUpperCase() > 'Z') {
                flip[i] = part[i];
            } else {
                flip[part.length - i] = part[i];
            }
        }
        result.push(flip.join(''));
    });
    return result.join(' ');
}
