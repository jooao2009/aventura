const avanca = document.querySelectorAll('btn-proximo');
const reiniciarBtn =document.getElementById('.btm-reniciar');

avanca.forEach(button => {
button.addEventListener('click',function(){
    const atual = document.querySelector(.ativo);
    const proximoPasso='passo-'+this,getAttribute('data-proximo')

    atual.classlist.remove('ativo')
    const proxmoelemento= document.getElementById(proximoPasso);


if(proxmoelemento){
   proxmoelemento.classList.add('ativo');
  }else {
console.error(`Elemento com ID "${porximoPasso}não encontrado,`)
  }
  


  })
});

// Reinicia o jogo ao clicar no botão de reinício
if (reiniciarBtn) {
    reiniciarBtn.addEventListener('click', () => {
        const atual = document.querySelector('.ativo');
        atual.classList.remove('ativo');
        document.getElementById('passo-0').classList.add('ativo');
    });
}






