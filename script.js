/*
Worship = 拜=bye
Crab=蟹=hi
Shrimp=蝦=ha
Worshipx2=拜拜=bye bye
Shrimpx2=蝦蝦=Haha
*/
meanings = {
  "niocez":["noice/nice", null],
  "noodles":["mean", "noodles => 麵 => mean"],
  "nox1":["no", null],
  "nox2":["don't know", "nox2 => no no => don't no => don't know"],
  // "nox3":"know",
  "worship":["bye", "worship => 拜 => bye"],
  "crab":["hi", "crab => 蟹 => hi"],
  "shrimp":["ha", "shrimp => 蝦 => ha"],
  "worshipx2":["bye bye", null],
  "shrimpx2":["haha", null]
}

div = document.getElementById("main")

let i = 0

for (key in meanings) {
  div.innerHTML += `<button style="font-size: large; background: blue; color: white;" id="${i}">${key}</button>`
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
