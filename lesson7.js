// Зробити свій розпорядок дня.
//
//     У вас має бути більше 10 асинхронних дій з рандомними затримками.
//     Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
//
//     Напиклад.
//     Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с
//
// І так далі
//Promise

// function wakeUp () {
//     return new Promise((resolve) => {
//         setTimeout( () => {
//             console.log('Wake up');
//             resolve();
//         }, 300)
//     } )
//
// }
//
// function haveBreakfast (food) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log('Make breakfast');
//             if (food === 'fruits' ) {
//                 console.log('Apple, banana, strawberry')
//                 reject ('Just fruits')
//
//             }
//             else {
//                 console.log('Oatmeal')
//                 resolve ('Add some fruits')
//             }
//         }, 1000)
//     })
//
// }
//
// function shower () {
//     return new Promise ((resolve) => {
//         setTimeout( () => {
//             console.log('Take a shower');
//             resolve('--------');
//         }, 500)
//     })
//
// }
//
// function walking () {
//     return new Promise ((resolve) => {
//         setTimeout( () => {
//             console.log('Go for a walk');
//             resolve('Have a nice walk');
//         }, 1500)
//     })
//
// }
//
// function swimming () {
//     return new Promise ((resolve) => {
//         setTimeout( () => {
//             console.log('Swim in swimming pool');
//             resolve('Make some flips');
//         }, 2000)
//     })
//
// }
//
// function eatLunch () {
//     return new Promise ((resolve) => {
//         setTimeout( () => {
//             console.log('Make a lunch');
//             resolve('Bon appetit!');
//         }, 800)
//     })
//
// }
//
// function reading (time) {
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             console.log('Read a book')
//             if (time > 30) {
//                 console.log('Read a non-fiction')
//                 resolve('SAPIENS. A Brief History of Humankind')
//             }
//             else {
//                 console.log('Read a novel')
//                 reject('Read some short story')
//             }
//         }, 3000)
//     })
//
// }
//
// function makeDinner () {
//     return new Promise ((resolve) => {
//         setTimeout( () => {
//             console.log('Make dinner');
//             resolve('Some fish with vegetables');
//         }, 700)
//     })
//
// }
//
// function toDraw () {
//     return new Promise ((resolve) => {
//         setTimeout( () => {
//             console.log('Then draw a picture');
//             resolve('Some nice landscape');
//         }, 1300)
//     })
//
// }
//
// function bedTime () {
//     return new Promise ((resolve) => {
//         setTimeout( () => {
//             console.log('Time to sleep');
//             resolve('Have a good night!');
//         }, 400)
//     })
//
// }

// wakeUp().then()
//
// haveBreakfast('oatmeal')
//     .then(value => {
//         console.log(value)
//
//         return shower();
//     })
//     .then(value => {
//
//         console.log(value)
//         return walking();
//     })
//     .then(value => {
//
//         console.log(value);
//         return swimming();
//     })
//     .then(value => {
//
//         console.log(value);
//         return eatLunch();
//     })
//     .then(value => {
//
//         console.log(value);
//         return reading(32)
//     })
//
//
//     .catch(reason => {
//         console.log('***************')
//         console.log(reason)
//         console.log('***************')
//     })
//
//     .then(value => {
//
//         console.log(value);
//         return makeDinner();
//     })
//     .then(value => {
//
//         console.log(value);
//         return toDraw();
//     })
//     .then(value => {
//
//         console.log(value);
//         return bedTime();
//     })
//     .then(value => {
//
//         console.log(value);
//     })



//Think await


function wakeUp () {
    return new Promise((resolve) => {
        setTimeout( () => {
            console.log('Wake up');
            resolve('Good morning!');
        }, 300)
    } )

}

function haveBreakfast (food) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Make breakfast');
            if (food === 'fruits' ) {
                console.log('Apple, banana, strawberry')
                resolve ('Just fruits')

            }
            else {
                console.log('Oatmeal')
                reject ('Add some fruits')
            }
        }, 1000)
    })

}

function shower () {
    return new Promise ((resolve) => {
        setTimeout( () => {
            console.log('Take a shower');
            resolve('--------');
        }, 500)
    })

}

function walking () {
    return new Promise ((resolve) => {
        setTimeout( () => {
            console.log('Go for a walk');
            resolve('Have a nice walk');
        }, 1500)
    })

}

function swimming () {
    return new Promise ((resolve) => {
        setTimeout( () => {
            console.log('Swim in swimming pool');
            resolve('Make some flips');
        }, 2000)
    })

}

function eatLunch () {
    return new Promise ((resolve) => {
        setTimeout( () => {
            console.log('Make a lunch');
            resolve('Bon appetit!');
        }, 800)
    })

}

function reading (time) {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            console.log('Read a book')
            if (time > 30) {
                console.log('Read a non-fiction')
                resolve('SAPIENS. A Brief History of Humankind')
            }
            else {
                console.log('Read a novel')
                reject('Read some short story')
            }
        }, 3000)
    })

}

function makeDinner () {
    return new Promise ((resolve) => {
        setTimeout( () => {
            console.log('Make dinner');
            resolve('Some fish with vegetables');
        }, 700)
    })

}

function toDraw () {
    return new Promise ((resolve) => {
        setTimeout( () => {
            console.log('Then draw a picture');
            resolve('Some nice landscape');
        }, 1300)
    })

}

function bedTime () {
    return new Promise ((resolve) => {
        setTimeout( () => {
            console.log('Time to sleep');
            resolve('Have a good night!');
        }, 400)
    })

}

async function schedule() {
    try {
        const morning = await wakeUp();
        console.log(morning, 'morning');
        const breakfast = await haveBreakfast('fruits');
        console.log(breakfast);
        const bathroom = await shower();
        console.log(bathroom);
        const walk = await walking();
        console.log(walk);
        await swimming();
        const lunch = await eatLunch();
        console.log(lunch);
        const readingTime = await reading(35);
        console.log(readingTime);
        const dinner = await makeDinner();
        console.log(dinner);
        const draw = await toDraw();
        console.log(draw);
        const night = await bedTime();
        console.log(night);
    } catch (e) {
        console.log('Else')
        console.log(e)
    }
}

schedule();




