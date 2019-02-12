const test = message => console.log('babel test');

test();


function testMap() {
    const arr = ['1', '2', '3'];
    return arr.map((item) => item > 1);
}

testMap();

export {
    test,
    testMap,
};

