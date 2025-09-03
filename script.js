const conteudo = document.getElementById('conteudo');

function mostrarSecao(secao) {
  const textos = {
    presencial: {
      titulo: 'Presencial',
      texto: 'Conheça os cursos presenciais da Unimar, disponíveis em diversas áreas do conhecimento.'
    },
    ead: {
      titulo: 'EAD',
      texto: 'Confira os cursos oferecidos na modalidade EAD, com flexibilidade e qualidade.'
    },
    vestibular: {
      titulo: 'Vestibular',
      texto: 'Saiba como ingressar na Unimar, processos seletivos e inscrições abertas.'
    },
    noticias: {
      titulo: 'Notícia',
      texto: 'oi'

    }

  };

  const info = textos[secao] || { titulo: '', texto: '' };
  conteudo.innerHTML = `<h2>${info.titulo}</h2><p>${info.texto}</p>`;
}



function mostrarSecao(secao) {
  // esconde todas
  document.querySelectorAll('.secao').forEach(s => s.classList.remove('active'));
  // mostra só a clicada
  const ativa = document.getElementById(secao);
  if (ativa) ativa.classList.add('active');
}



//function lerTexto() {
//let texto = document.getElementById("conteudo").innerText;
//let fala = new SpeechSynthesisUtterance(texto);
//fala.lang = "pt-BR"; // idioma português
//window.speechSynthesis.speak(fala);



