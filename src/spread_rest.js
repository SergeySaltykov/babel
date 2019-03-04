const obj = {
    comments: {
        links: '#',
        type: 'test',
        id: 0,
    },
    people: {
        links: '#',
        type: 'autor',
        id: 1,
    },
    articles: {
        links: '#',
        type: 'title',
        id: 2,
    }
};

function getRestArray(a, b, ...rest) {
    console.log(a, b, rest);
}

getRestArray('4', '5', '6,', '7', '8'); // 4, 5 ,["6,", "7", "8"]


function getSpread(data = {}) {
    const {people, ...object} = data;
    const test = ['1', {}, '3,', object];
    console.log(test);
}

getSpread(obj);
getSpread();
