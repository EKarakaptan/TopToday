let elem = document.createElement('div')
document.body.appendChild(elem)
    // let shadow = elem.attachShadow({ mode: 'open' })
    // shadow.appendChild(
elem.appendChild(
    (() => {
        var navbar = document.createElement('container')
        async function nav() {
            let result = await (await fetch('https://ekarakaptan.github.io/Temp/public/navbar.html')).text()
            navbar.innerHTML = result
        }
        nav()
        return navbar
    })()
)