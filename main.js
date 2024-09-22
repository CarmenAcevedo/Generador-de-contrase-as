let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensaje = document.getElementById('mensaje');
let limpiar = document.getElementById('limpiar');
let strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\^&\*])(?=.{8,})/;

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

let password = '';
function generar() {
    let numeroDigitado = parseInt(cantidad.value);
    if(numeroDigitado) {
        if(numeroDigitado < 3) {
            alert("La cantidad de caracteres tiene que ser mayor o igual a 8");
        } else{        
            for(let i=0; i < numeroDigitado; i++) {
                let indiceAletario = Math.floor(Math.random() * cadenaCaracteres.length);
                let caracterAleatorio = cadenaCaracteres[indiceAletario];
                password += caracterAleatorio; 
            }
            contrasena.value = password;
            
        }
    }
      
    // Validamos si la contraseña cumple con los requisitos
    if (validarContrasena(password)) {
        mensaje.innerHTML += '<li>Contraseña válida</li>';
      } else {
        mensaje.innerHTML += '<li>Contraseña inválida. Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial.</li>';
      }
}

function limpiarCantiidadContrasena() {
    cantidad.value = '';
    contrasena.value = '';
}



function validarContrasena(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
    
  }
    
