// Função para validar se o texto contém apenas letras minúsculas sem acentos e espaços
function validarTexto(texto) {
  return /^[a-z\s]+$/.test(texto);
}


// Função para criptografar o texto
function criptografarTexto(texto) {
  texto = texto.replaceAll('e', 'enter');
  texto = texto.replaceAll('i', 'imes');
  texto = texto.replaceAll('a', 'ai');
  texto = texto.replaceAll('o', 'ober');
  texto = texto.replaceAll('u', 'ufat');
  return texto;
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
  texto = texto.replaceAll('enter', 'e');
  texto = texto.replaceAll('imes', 'i');
  texto = texto.replaceAll('ai', 'a');
  texto = texto.replaceAll('ober', 'o');
  texto = texto.replaceAll('ufat', 'u');
  return texto;
}

// Função para criptografar o texto ao clicar no botão "Criptografar"
function btnCriptografar() {
  var textoOriginal = document.getElementById('textareaesquerda').value.toLowerCase();

  if (!validarTexto(textoOriginal)) {
      alert("Somente letras minúsculas, sem acento e espaços são permitidas.");
      return;
  }

  var textoCriptografado = criptografarTexto(textoOriginal);
  var resultadoTexto = document.getElementById('textareadireita');
  resultadoTexto.value = textoCriptografado;

  // Limpar o campo textareaesquerda
  document.getElementById('textareaesquerda').value = "";

  ocultarElementosAdicionais();
}


// Função para descriptografar o texto ao clicar no botão "Descriptografar"
function btnDescriptografar() {
  var textoCriptografado = document.getElementById('textareadireita').value;

  var textoDescriptografado = descriptografarTexto(textoCriptografado);
  var resultadoTexto = document.getElementById('textareadireita');
  resultadoTexto.value = textoDescriptografado;

  // Limpar o campo textareaesquerda
  document.getElementById('textareaesquerda').value = '';
}


// Função para copiar o texto criptografado ao clicar no botão "Copiar"
function copiar() {
  var textoResultado = document.getElementById('textareadireita').value;

  navigator.clipboard.writeText(textoResultado).then(function() {
      alert("Texto copiado!");
  }, function(err) {
      console.error('Falha ao copiar: ', err);
  });
}

// Função para ocultar elementos adicionais
function ocultarElementosAdicionais() {
  var elementosAdicionais = document.querySelectorAll('.section_direita img, .section_direita h3, .section_direita p');
  elementosAdicionais.forEach(function(elemento) {
      elemento.style.display = 'none';
  });

  var btnCopiar = document.querySelector('.section_direita button.btn_copiar');
  if (document.getElementById('textareadireita').value.trim() !== '') {
      btnCopiar.style.display = 'block';
  } else {
      btnCopiar.style.display = 'none';
  }
}


