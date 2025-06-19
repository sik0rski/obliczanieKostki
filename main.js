// Tyle jest w jednej rajce: 1A 3B 2C 2D
// Tyle jest na całej palecie (1 poziom): 6A 18B 12C 12D
// poziomow jest 28
let aAmount = 1 * 6 * 28
let bAmount = 3 * 6 * 28
let cAmount = 2 * 6 * 28
let dAmount = 2 * 6 * 28

let first = 9
let second = 13
let third = 17
let fourth = 21


function calculateCombinations() {
    let resultDiv = document.getElementById("result")
    resultDiv.innerHTML = ""

    let target = document.getElementById("targetLength").value


    for (let a = 0; a < 10; a++) {
        for (let b = 0; b < 10; b++) {
            for (let c = 0; c < 10; c++) {
                for (let d = 0; d < 10; d++) {
                    let equation = (a * first + b * second + c * third + d * fourth)

                    if (equation == target) {

                        let blockAmount = (`${a}A     ${b}B     ${c}C     ${d}D`)
                        let usagePercentage = `${(a / aAmount * 100).toFixed(3)}% ${(b / bAmount * 100).toFixed(3)}% ${(c / cAmount * 100).toFixed(3)}% ${(d / dAmount * 100).toFixed(3)}%`
                        console.log(usagePercentage)
                        
                        let totalUsage = ((a / aAmount + b / bAmount + c / cAmount + d / dAmount) * 100 / 4).toFixed(3)
                        console.log(`Średnie zużycie budulca: ${totalUsage}%`)
                        
                        let node = document.createElement("p");
                        let textnode = document.createTextNode(blockAmount, "<br>");
                        node.appendChild(textnode);
                        document.getElementById("result").appendChild(node);


                    }
                }
            }
        }
    }
}


