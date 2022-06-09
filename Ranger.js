function createRange(){
    let hand = ""
            let matrix = []
            let ranks = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];
            for (let i=0; i<13; i++){
                let line = []
                for (let j=0; j<13; j++){
                    if (i < j){
                        hand = ranks[i] + ranks[j] + "s";
                    } else if (i > j){
                        hand = ranks[j] + ranks[i] + "o";
                    } else {
                        hand = ranks[i] + ranks[j];
                    }
                    line.push(hand)  
                }
                matrix.push(line)
            }
            return matrix
}

function rangeTable(document){
    table = document.createElement("table");
    table.id = "rangeTable"
    pkrange = createRange()
    for (let i=0; i<13; i++){
        let newLine = document.createElement("tr")
        for (j=0; j<13; j++){
            let box = document.createElement("td")
            let newDiv = document.createElement("div")
            let para = document.createElement("p")
            newDiv.classList.add("handBox")
            newDiv.id = "hand"+pkrange[i][j]
            para.innerHTML=pkrange[i][j]
            newDiv.appendChild(para)
            box.appendChild(newDiv)
            newLine.appendChild(box)
        }
        table.appendChild(newLine)
    }
    return table
}

function createRangeDict(){
    var rangeDict = {}
                for (i=0; i<13; i++){
                    for (j=0; j<13; j++){
                        rangeDict[pkrange[i][j]] = Math.random()
                    }
                }
    return rangeDict
}

function displayHandProba(hand, p){
    console.log(hand, p)
    c1 = "green"
    c2 = "red"
    x1 = 100*p-5+"%"
    x = 100*p+"%"
    x2 = 100*p+5+"%"
    sel = "#"+"hand"+hand
    box = document.querySelector(sel)
    bcg = 'background: linear-gradient(to bottom, green ' + x + ', red ' + x + ' 100%)'
    if (p > 0.05 && p < 0.95){
        bcg = "background: linear-gradient(green "+x1+", "+x+", red "+x2+")";
    }
    
    box.setAttribute('style', bcg)
    
}