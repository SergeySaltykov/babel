import '@babel/polyfill';

const test = message => console.log('babel test');

test();


function testMap() {
    const arr = ['1', '2', '3'];
    return arr.map((item) => item > 1);
}

async function foo() {
    const data = {
        data: [
            {
                type: 'articles',
                id: 1,
                attributes: {
                    title: "JSON:API",
                    link: "#",
                },
            },
            {
                type: 'people',
                id: 2,
                attributes: {
                    firstName: "Ivan",
                    lastName: "Ivanov",
                    link: "#",
                },
            },
        ]
    };

    return data;
}

testMap();

export {
    test,
    testMap,
    foo,
};

