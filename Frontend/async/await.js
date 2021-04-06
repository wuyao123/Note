// async function async1() {
//     console.log('async1 start')
//     await async2()
//     console.log('async1 end')
// }
// async function async2() {
//     console.log('async2')
// }

// console.log('script start')

// setTimeout(function () {
//     console.log('setTimeout')
// }, 0)

// const res = async1();

// new Promise(function (resolve) {
//     console.log('promise1')
//     resolve();
// }).then(function () {
//     console.log('promise2')
// })

// console.log('script end')

function testSometing() {
    console.log("执行testSometing");//2
    return "testSometing";//5
}
async function testAsync() {
    console.log("执行testAsync");//6
    return Promise.resolve("hello async");
}
async function test() {
    console.log("test start...");//1
    const v1 = await testSometing();
    console.log(v1);
    const v2 = await testAsync();
    console.log(v2);
    console.log(v1, v2);
}
test();
var promise = new Promise((resolve)=> { 
    console.log("promise start.."); //3
    resolve("promise");//7
});
promise.then((val)=> console.log(val));
console.log("test end...")//4