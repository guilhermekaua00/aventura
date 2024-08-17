const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button =>{
    button.addEventListener('click' , function(){
        const atual = document.querySelector('.ativo');
        const proximoPAsso = 'passo-' + this.getAttribute('data-proximo');

        atual. classList.remove('ativo');
        document.getElementById(proximoPAsso).classList.add('ativo');
    })
})