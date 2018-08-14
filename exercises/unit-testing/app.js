
// HOW ASSERT FUNCTIONS WORK
//     try {
//         if (actual !== expected) {
//             throw {
//                 type: "Fail",
//                 details: { actual: actual, expected: expected }
//             }
//         } else {
//             console.log('Success\n', {
//                 type: 'Test Passed',
//                 details: { actual: actual, expected: expected}
//             })
//         }
//     }
//     catch(err) {
//         console.log(err)
//     }
// }


module.exports = { addS: addS }

function addS(arr) {
    if (arr.find(val => { return typeof val === 'number' })) {
        return 'no numbers'
    } else {
        return arr.map((val) => { return (val.endsWith('s')) ? val : `${val}s` })
    }
}
