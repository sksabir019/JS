const obj = [
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 2', data: 'Data2' },
    { key: 'Sample 1', data: 'Data1' },
    { key: 'Sample 3', data: 'Data1' },
    { key: 'Sample 4', data: 'Data1' },
]

// Method 1: Using reduce
const groupBy = (array, keyFn) => {
    return array.reduce((result, item) => {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};

const res = groupBy(obj, ele => ele.key);
console.log(res);

// Method 2: Using forEach
const groupByForEach = (array, keyFn) => {
    const result = {};
    array.forEach(item => {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    });
    return result;
};

const resForEach = groupByForEach(obj, ele => ele.key);
console.log(resForEach);

// Method 3: Using Map
const groupByMap = (array, keyFn) => {
    const map = new Map();
    array.forEach(item => {
        const key = keyFn(item);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(item);
    });
    return Object.fromEntries(map);
};

const resMap = groupByMap(obj, ele => ele.key);
console.log(resMap);

// Method 4: Using Lodash (if lodash is available)
// const _ = require('lodash');
// const resLodash = _.groupBy(obj, 'key');
// console.log(resLodash);

// Method 5: Group by
const res1 = Object.groupBy(obj, ele => ele.key)
console.log(res1)

// Method 6: Using for...of
const groupByForOf = (array, keyFn) => {
    const result = {};
    for (const item of array) {
        const key = keyFn(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
};

const resForOf = groupByForOf(obj, ele => ele.key);
console.log(resForOf);

//ALternate:
// Alternate grouping method using forEach
const output = {};
obj.forEach(item => {
    if (!output[item.key]) {
        output[item.key] = [item];
    } else {
        output[item.key].push(item);
    }
});
console.log(output);