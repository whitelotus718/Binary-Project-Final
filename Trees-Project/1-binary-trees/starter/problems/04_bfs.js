function bfs(root){
    if (!root) return [];
    let resultArr = []
    let queueArr = [root]

    while (queueArr.length) {
        let el = queueArr.shift()
        if (el.left) queueArr.push(el.left)
        if (el.right) queueArr.push(el.right)
        resultArr.push(el.val)
    }
    return resultArr;
}

module.exports = { bfs };

//         a         
//      b    c       
//    d  e  g  f

// el = 
// resultArr = [a b c d e g f] 
// queueArr =  []