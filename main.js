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
        console.log(e);
        if (e.code === 'Space' || e.code === 'Enter') btns[i].classList.add('ativa');
    });

    btns[i].addEventListener('keyup', () => {
        btns[i].classList.remove('ativa');
    })
}