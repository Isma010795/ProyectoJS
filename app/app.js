const users = [
    { user: 'Mali', pass: '12345', saldo: 200 },
    { user: 'Gera', pass: '12345', saldo: 290 },
    { user: 'Maui', pass: '12345', saldo: 67 }

]


const userName = document.querySelector('#username')

const userPassword = document.querySelector('#password')

const userbtn = document.querySelector('#btn-submit')

const usermensaje = document.querySelector('#mensaje')


const btnconsulta = document.querySelector('#btnconsulta')

const msjconsulta = document.querySelector('#SaldoConsulta')

let usersaldo = document.querySelector('#AgrSaldo')

const btnagr = document.querySelector('#btnAgregar')

const btnretirar = document.querySelector('#btnretira')

function inicioSesion() {
    const { user, pass } = users[0];

    for (let i = 0; i < users.length; i++) {
        if (userName.value === users[i].user && userPassword.value === users[i].pass) {
            usermensaje.innerText = 'Credenciales correctas'
            usermensaje.classList.add('success')
            usermensaje.classList.remove('error')
            console.log('inicio');
            window.localStorage.setItem('usuarioActual', i)
            setTimeout(function () {
                window.location.href = './rutas/menu.html';
            }, 2000);
            return true
        } else {
            usermensaje.innerText = "Credenciales incorrectas"
            usermensaje.classList.add('error')
            usermensaje.classList.remove('success')
          
        }
    }
    return false
}

if (userbtn) {
    userbtn.addEventListener('click', inicioSesion)
}


function consulta() {
    let i = Number(window.localStorage.getItem('usuarioActual'))
    msjconsulta.innerText = users[i].saldo
  


}
if (btnconsulta) {
    btnconsulta.addEventListener('click', consulta)
}

function agSaldo() {
    let i = Number(window.localStorage.getItem('usuarioActual'))
    let ingresosaldo = Number(usersaldo.value);
    if (users[i].saldo + ingresosaldo < 990) {
        users[i].saldo += ingresosaldo;
        alert("tu saldo actual es "+ users[i].saldo);
        msjconsulta.innerText = users[i].saldo
        console.log(ingresosaldo);
        console.log(users[i].saldo);
        usersaldo.value=' ';  

        return true
    } else {
        alert("No puedes agregar ese monto ya que supera el maximo permitido "+ ingresosaldo);
        usersaldo.value=' ';  
    }
return false
}
if (btnagr) {
    btnagr.addEventListener('click', agSaldo)
}
function reSaldo(){
    let i = Number(window.localStorage.getItem('usuarioActual'))
    let ingresosaldo = Number(usersaldo.value);
    if (users[i].saldo - ingresosaldo > 10) {
        users[i].saldo -= ingresosaldo;
        alert("tu saldo actual es "+ users[i].saldo);
        msjconsulta.innerText = users[i].saldo
        console.log(ingresosaldo);
        console.log(users[i].saldo);
        usersaldo.value=' ';  

        return true
    } else {
        alert("No puedes retirar esa cantidad el monto minimo en saldo es de 10 ");
        usersaldo.value=' ';  
    }
return false
} 
if (btnretirar) {
    btnretirar.addEventListener('click', reSaldo)
}

function salir(){
    window.localStorage.clear('usuarioActual');
    setTimeout(function () {
        window.location.href = '../index.html';
    }, 2000);
}
