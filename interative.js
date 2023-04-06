// Este é um exemplo básico de JavaScript para validar o formulário de contato

var form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  // Evita que o formulário seja enviado sem validação
  event.preventDefault();

  // Validação do campo nome
  var nome = document.querySelector('#nome');
  if (nome.value === "") {
    alert("Por favor, preencha o campo nome.");
    nome.focus();
    return false;
  }

  // Validação do campo e-mail
  var email = document.querySelector('#email');
  if (email.value === "") {
    alert("Por favor, preencha o campo e-mail.");
    email.focus();
    return false;
  }

  // Validação do campo mensagem
  var mensagem = document.querySelector('#mensagem');
  if (mensagem.value === "") {
    alert("Por favor, preencha o campo mensagem.");
    mensagem.focus();
    return false;
  }

  // Se todos os campos foram preenchidos corretamente, o formulário é enviado
  alert("Mensagem enviada com sucesso!");
  form.submit();
});
