// Please write a function that sums a list, but ignores any duplicate items in the list.
//
//     For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
    const count = numList.reduce((acc, e) => {
        acc[e] = (acc[e] || 0) + 1;
        return acc;
    }, {});
    let newList = (Object.keys(count)).filter( (e) => count[e] === 1)
    return newList.reduce( (acc, e) => acc + Number(e), 0)
}