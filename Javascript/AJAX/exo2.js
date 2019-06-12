const getRandomInt = (min,max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

const req = new XMLHttpRequest()
let a = []
let b = []
let c = []
req.onreadystatechange = (event) => {
    // XMLHttpRequest.DONE === 4
    if (req.readyState === XMLHttpRequest.DONE) {
        if (req.status === 200) {
            res = JSON.parse(req.response)
            console.log(res)
            res.map((element) => element["score"] = getRandomInt(0,1000))
            res.sort((el1,el2) => el1.score - el2.score)
            res.forEach((element)=> {
                if(element.score > 750) {
                    a.push(element)
                }
                else if (element.score > 500) {
                    b.push(element)
                }
                else {
                    c.push(element)
                }
            })
            const filtre = res.filter((element) => element.country == "Bahrain")
        }
    }
}
console.log(res[res.length - 1]);
console.log(res[0]);
console.log(a,b,c);
console.log(filtre);



// forEach = parcours/modifie le tableau en cours
// map = fait une copie du tableau