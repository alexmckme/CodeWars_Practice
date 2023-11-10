// There is a sentence which has a mistake in its ordering.
//
//     The part with a capital letter should be the first word.
//
//     Please build a function for re-ordering
//
//     Examples
//     >>> re_ordering('ming Yao')
// 'Yao ming'
//
// >>> re_ordering('Mano donowana')
// 'Mano donowana'
//
// >>> re_ordering('wario LoBan hello')
// 'LoBan wario hello'
//
// >>> re_ordering('bull color pig Patrick')
// 'Patrick bull color pig'

function reOrdering(text){
    let textArr = text.split(" ")
    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i][0] === textArr[i][0].toUpperCase()) {
            let first = textArr[i]
            textArr.splice(i, 1)
            textArr.unshift(first)
            break
        }
    }
    return textArr.join(" ")
}