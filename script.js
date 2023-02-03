// Use of append
// const body = document.body
// body.append('hello World', " Bye")

// Create element
// const body = document.body
// const div = document.createElement('div') 
// div.innerText = "Hello World"
// div.textContent = "Hello World2"
// body.append(div)

// Modifying Element In HTML
// const div = document.querySelector('div')
// console.log(div.textContent)
// console.log(div.innerText)

// modify the html content with using innerHTML
// const body = document.body
// const div = document.createElement("div")
// div.innerHTML = "<strong>Hello World 2</strong>"
// const strong = document.createElement('strong')
// strong.innerText = "Hello World 3"
// div.append(strong)
// body.append(div)

// Remove the element
// const body = document.body
// const div = document.querySelector("div")
// const spanHi = document.querySelector("#hi")
// const spanBye = document.querySelector("#bye")
// spanBye.remove()
// div.append(spanBye)
// div.removeChild(spanHi) you can use this also to remove element

// to set attribute and remove the attribute
// const body = document.body
// const div = document.querySelector("div")
// const spanHi = document.querySelector("#hi")
// const spanBye = document.querySelector("#bye")
// console.log(spanHi.getAttribute("title"))
// console.log(spanHi.id)
// console.log(spanHi.setAttribute('id', 'hi1'))
// console.log(spanHi.setAttribute('title', 'hello1'))
// spanHi.removeAttribute('id')
// spanHi.removeAttribute('title')

// Custome DataAttributes
// const body = document.body
// const div = document.querySelector("div")
// const spanHi = document.querySelector("#hi")
// const spanBye = document.querySelector("#bye")
// console.log(spanHi.dataset)
// console.log(spanHi.dataset.longerName)
// console.log(spanHi.dataset.test)
// spanBye.dataset.newName = "Bye span tag"

const body = document.body
const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")
spanBye.classList.add('new-class')
spanHi.classList.remove('h1')
spanHi.classList.toggle('h3',true)

spanHi.style.backgroundColor = "red"
spanHi.style.color = "white"
spanBye.style.color = "red"