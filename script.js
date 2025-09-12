const avanca=document.querySelectorAll('btn-proximo');
const reiniciarBtn=document.getElementById('btn-reiniciar');


avanca.forEach(button =>) {
    button.addEventListener('click', function (){
        const atual=document.querySelector('.ativo'); 
        const proximoPasso='passo-'+this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        const proximoElrmento=document.getElementById(proximoPasso);

        if(proximoElemento){
            proximoElrmento.classList

}