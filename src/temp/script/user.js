const state_logged_in = [
    "avatar.hidden=false",
    "login_name.hidden=true",
    "login_pass.hidden=true",
    "login_link.hidden=true",
    "logout_link.hidden=false",
    "registration_link.hidden=true",
    `auth_btn.innerText='username.value'`
];
const state_logged_out = [
    "avatar.hidden=true",
    "login_name.hidden=false",
    "login_pass.hidden=false",
    "login_link.hidden=false",
    "logout_link.hidden=true",
    "registration_link.hidden=false",
    `auth_btn.innerText='Login'`
];
const state_registration = [
    "avatar.hidden=true",
    "login_name.hidden=false",
    "login_pass.hidden=false",
    "login_link.hidden=false",
    "logout_link.hidden=true",
    "registration_link.hidden=false",
    `auth_btn.innerText='Login'`,
    "widgets_block.hidden=true",
    "history_block.hidden=true",
];

function set_hidden(state) {
    state.forEach(elem => eval(elem));
}

(function() {
    var res = document.cookie.split("; ").map(x =>
        Object.assign({}, {
            [x.split("=")[0]]: x.split("=")[1]
        })
    );
    var infoDate = document.createElement("p");
    infoDate.className = "text-muted text-center font-weight-light"
    var resDate = res.find(elem => elem.last_visit);
    resDate
        ?
        (document.body.appendChild(
            infoDate
        ).innerText = `last visit time: ${resDate.last_visit}`) :
        console.log("no last visit time info");

    document.cookie =
        `last_visit=${new Date().toLocaleString()}; expires = ` +
        new Date(Date.now() + 86400e3).toUTCString();
})();