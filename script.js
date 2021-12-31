/*
Worship = 拜=bye
Crab=蟹=hi
Shrimp=蝦=ha
Worshipx2=拜拜=bye bye
Shrimpx2=蝦蝦=Haha
*/
meanings = {
  "niocez":"noice/nice",
  "noodles":"mean",
  "nox1":"no",
  "nox2":"don't know",
  "nox3":"know",
  "worship":"bye",
  "crab":"hi",
  "shrimp":"ha",
  "worshipx2":"bye bye",
  "shrimpx2":"haha"
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
    document.getElementById("contents").innerText = elem.innerText + ": " + val
  })
}
// console.log(div.innerHTML)
