const usuarioCadastrado = {username:"Larissard",password:"lari123+", cpf:"13824396793"}
  const usuarioCadastrado2 = {username:"Admin",password:"admin123!", cpf:"13824396793"}
  const usuarioCadastrado3 = {username:"Usuario",password:"user123!", cpf:"13824396793"}

  const loginBtn = document.querySelector("#log")
  loginBtn.addEventListener("click", ()=>{
    const pessoa = new Pessoa(
      document.getElementsByName("username"),
      document.getElementsByName("pass"),
      document.getElementsByName("cpf")
    );
    pessoa.login()
  })

  const logadoTela = document.querySelector(".logado")
  const loginTela = document.querySelector(".login-tela")


class Pessoa {
  constructor(username, password, cpf) {
    this.username = username[0].value;
    this.password = password[0].value;
    this.cpf = cpf[0].value;
  }

  loginAux(){
    grecaptcha.execute();
    window.location.href = "pag/home.html"
    
  }
  login() {
    const user = { username : this.username, password: this.password, cpf: this.cpf};
    console.log("no login, ", user)
    if(user.username==usuarioCadastrado.username && user.password==usuarioCadastrado.password && user.cpf==usuarioCadastrado.cpf){
     this.loginAux()
    }
    else if(user.username==usuarioCadastrado2.username && user.password==usuarioCadastrado2.password && user.cpf==usuarioCadastrado2.cpf){
      this.loginAux()
    }
    else if(user.username==usuarioCadastrado3.username && user.password==usuarioCadastrado3.password && user.cpf==usuarioCadastrado3.cpf){
      this.loginAux()
    }
    else {
    
      alert("Usuário não cadastrado")
    }

  }
  

}
