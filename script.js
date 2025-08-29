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
    areaAluno: {
      titulo: 'Área do Aluno',
      texto: 'Acesse informações acadêmicas, boletos, notas e muito mais em sua área exclusiva.'
    },
    vestibular: {
      titulo: 'Vestibular',
      texto: 'Saiba como ingressar na Unimar, processos seletivos e inscrições abertas.'
    }
  };

  const info = textos[secao] || { titulo: '', texto: '' };
  conteudo.innerHTML = `<h2>${info.titulo}</h2><p>${info.texto}</p>`;
}