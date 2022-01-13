/*
Worship = 拜=bye
Crab=蟹=hi
Shrimp=蝦=ha
Worshipx2=拜拜=bye bye
Shrimpx2=蝦蝦=Haha
*/
function main() {
meanings = {
  "niocez":["noice/nice", null],
  "nodlez":["mean", "nodlez => noodles => 麵 => mean"],
  "nox1":["no", null],
  "nox2":["don't know", "nox2 => no no => don't no => don't know"],
  // "nox3":"know",
  "wershi":["bye", "wershi => worshi => worship => 拜 => bye"],
  "krbuh":["hi", "Krbuh-> Krabuh => Krab => crab => 蟹 => hi"],
  "prnuh":["ha", "prnuh => prawn => 蝦 => ha"],
  "wershix2":["bye bye", null],
  "prnuhx2":["haha", null],
  "cenz":["sense", "engwish"],
  "keti":["get it", "keti => geti => get it"],
  "kreem":["go", "kreem => cream => 糕 => go"],
  "wonx2": ["ok", "wonx2 -> onex2 -> one one -> eleven -> (eleventh alphabet) -> k -> ok"],
  "twentify": ["why", "twentify -> twenty-five -> (twenty-fifth alphabet) -> y -> why"],
  "atha": ["other", "basically engwish"],
  "enki": ["angry", "basically engwish"],
  "chekuh": ["check", null],
  "las": ["peace", "Las Vegas -> Veguh -> peas -> peace"],
  "zethre": ["see", "zethre -> zero three -> (third alphabet) -> c -> see"],
  "tweeuh": ["I know", null],
}

div = document.getElementById("main")

let i = 0

for (key in meanings) {
  div.innerHTML += `<button style="font-size: large; background: blue; color: white; border: 1px black; border-radius: 10px;" id="${i}">${key}</button>`
  // console.debug(div.innerHTML)
  // let self = document.getElementById(String(i))
  i++
}

for (let elem of div.children) {
  elem.addEventListener("click", () => {
    var val = Object.values(meanings)[elem.id]
    // console.debug(val)
    var contents = document.getElementById("contents")
    contents.innerText = elem.innerText + ": " + val[0]
    if (!(val[1] == null)) {
      contents.innerHTML += `<br><hr><details><summary>Details</summary>${val[1]}</details>`
    }
  })
}
// console.log(div.innerHTML)

document.getElementById("search").addEventListener("click", () => {
  console.debug("search event triggered")
  let search = document.getElementById("search-in")
  let searchValue = search.value.toLowerCase().replace(" ", "")
  console.log("searchValue: %s", searchValue)
  if (searchValue == "gay") {
    document.body.style.background = "red"
    window.alert("u are gay")
    return
  } else if (!Object.keys(meanings).includes(searchValue)) {
    return
  } else {
    let realButton
    for (let button of div.children) {
      if (button.innerText == searchValue) {
        realButton = button
        break
      }
    }
    realButton.click()
  }
})
}


document.body.style.visibility = "hidden"
document.body.innerHTML += "<input id=login><button id=login-btn>Login</button>"
let l = document.getElementById("login")
l.style.visibility = "visible"
let b = document.getElementById("login-btn")
b.style.visibility = "visible"
b.addEventListener("click", () => {
  let val = document.getElementById("login").value
  if (val.toLowerCase() == "hnpok") {
    // console.debug("SUSSY BAKA YOU GUESSED THE PASSWORD")
    b.style.visibility = "hidden"
    l.style.visibility = "hidden"
    document.body.style.visibility = "visible"
    main()
  } else {
    window.alert("You entered the wrong password. Try again.")
  }
})
