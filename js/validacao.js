function validacao(){
  var nome = form.nome.value;
  var email = form.email.value;
  var senha = form.senha.value;
  var confsenha = form.confsenha.value;
  var cnpj = form.cnpj.value;
  var rsocial = form.rsocial.value;
  var nfantasia = form.nfantasia.value;
  var site = form.site.value;
  var tel = form.tel.value;

  if (nome == "") {
    alert("Preencha o campo Nome")
    return false;
  }

  if (email == "") {
    alert("Preencha o campo Email")
    return false;
  }

  if (senha == "") {
    alert("Preencha a Senha")
    return false;
  }

  if (confsenha == "") {
    alert("Confirme a Senha")
    return false;
  }

  if (confsenha != senha) {
    alert("As senhas devem ser iguais")
    return false;
  }

  if (cnpj == "") {
    alert("Preencha o campo CNPJ")
    return false;
  }

  if (rsocial == "") {
    alert("Preencha o campo Razão Social")
    return false;
  }

  if (nfantasia == "") {
    alert("Preencha o campo Nome Fantasia")
    return false;
  }
  if (site == "") {
    alert("Preencha o campo Site")
    return false;
  }
  if (tel == "") {
    alert("Preencha o campo Telefone")
    return false;
  }
}