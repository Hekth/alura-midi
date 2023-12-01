<h1>
  Alura Midi
</h1>
<img src="https://github.com/Hekth/alura-midi/assets/151862970/da03cad9-b657-4c1c-ac57-5414f8eac290" width="400px">

<h2>
  Descrição geral
</h2>

<p>
  O Alura Midi é um projeto desenvolvido ao longo do curso "JavaScript para Web: Crie páginas dinâmicas" da Alura.
  O site possui 9 botões que, ao serem clicados, reproduzem um áudio correspondente, juntamente com um estilo visual de botão clicado.
  O foco principal do projeto era implementar um código JavaScript para que os botões reproduzissem o áudio correspondente, portanto, os estilos CSS e o conteúdo HTML já estavam prontos.
</p>

<h2>
  Tecnologias utilizadas
</h2>

<ul>
  <li>Javascript</li>
  <li>Manipulação do DOM</li>
  <li>Estruturas condicionais IF</li>
  <li>Estrutura de repetição FOR</li>
</ul>

<h2>
  Explicação do código
</h2>

´´´
  const btns = document.querySelectorAll('.tecla');

  for (let i = 0; i < btns.length; i++) {
      const btnClass = btns[i].classList[1];
    
      btns[i].addEventListener('click', () => {
          const audioId = `#som_${btnClass}`;

          if (!document.querySelector(audioId)) return alert('Áudio não encontrado.');
          if (document.querySelector(audioId).localName !== "audio") return alert('O elemento não é um áudio.');

          document.querySelector(audioId).play();
      });

      btns[i].addEventListener('keypress', (e) => {
        if (e.code === 'Space' || e.code === 'Enter') btns[i].classList.add('ativa');
      });

      btns[i].addEventListener('keyup', () => {
        btns[i].classList.remove('ativa');
      });
  }
´´´

