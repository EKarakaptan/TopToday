class AuthButton extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    let wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    wrapper.innerHTML = `
    <a id="auth_btn" class="navbar-brand text-warning" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">
      <h4 class="fas fa-user m-0"></h4>
    </a>
    <div class="dropdown-menu dropdown-menu-right bg-dark p-2" aria-labelledby="navbarDropdownMenuLink">
      <div id="login">
        <input id="login_name" name="login" type="text" class="form-control mb-1" placeholder="Login"
            aria-label="Text input with radio button" />
        <input id="login_pass" type="password" class="form-control mb-1" placeholder="Password"
            aria-label="Text input with radio button" style="color: red;" />
        <a class="col navbar-brand text-light m-auto" href="#top" id="login_link" role="button">Login</a>
        <a class="col navbar-brand text-light m-auto" href="#top" id="logout_link" role="button" hidden>Logout</a>
        <a class="col navbar-brand text-light m-auto" href="#top" id="registration_link" role="button">Registration</a>
      </div
    </div> 
    `

    this.appendChild(wrapper)
  }
}
customElements.define('auth-button', AuthButton)
//-------------------------------------------------

async function reg() {
  let result = await (
    await fetch(
      'https://ekarakaptan.github.io/Temp/public/reg_form.html'
    )
  ).text()
  regform.innerHTML = result
  let currentUser = null
  //login.hidden = true;
  //userInfo.style.display = "none"

  file.onchange = function(event) {
    if (event.target.files[0].type.indexOf('image') !== 0) return
    if (event.target.files[0].size > 300000) return
    let reader = new FileReader(event.target.files[0])
    reader.onload = event =>
      (document.getElementsByName('user-photo')[0].value =
        event.target.result)
    reader.readAsDataURL(event.target.files[0])
    document.getElementById(
      'user-photo-preview'
    ).src = URL.createObjectURL(event.target.files[0])
    avatar.src = document.getElementById('user-photo-preview').src
  }

  pass1.oninput = function(event) {
    let pass = event.target.value
    event.target.valid =
      pass.length > 6 && !!pass.match(/\d/) && !!pass.match(/\D/)
    event.target.style.color = event.target.valid ? 'green' : 'red'
    pass2.disabled = !event.target.valid
  }

  pass2.oninput = function(event) {
    event.target.valid = event.target.value === pass1.value
    event.target.style.color = event.target.valid ? 'green' : 'red'
  }

  pass2.onchange = function(event) {
    event.target.valid
      ? (passhash.value = Sha256.hash(event.target.value))
      : null
    document.cookie = `username=${username.value}; passhash=${passhash.value}`
  }

  registerbutton.onclick = function(event) {
    let formData = new FormData(
      document.getElementById('registrationForm')
    )
    let result = {}
    formData.forEach((val, key) =>
      Object.assign(result, {
        [key]: val
      })
    )
    fetch(
      `https://garevna-rest-api.glitch.me/user/${username.value}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(result)
      }
    )
      .then(response => response.json())
      .then(response => console.log(response))
      .then((avatar.hidden = false))
  }

  cancel_registerbutton.onclick = () => {
    registration.remove()
    widgets_block.hidden = false
    history_block.hidden = false
  }
}

//fetch("https://garevna-rest-api.glitch.me/users").then (response=>response.json()).then(response=>console.log(response))
