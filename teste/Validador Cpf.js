function ValidaCpf(cpfEnviado, cnpjEnviado){
    //Tirar caracteres especiais do cpf
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable:true,
        get:function(){
            return cpfEnviado.replace(/\D+/g, '')
        }
    });
    Object.defineProperty(this, 'cnpjLimpo',{
        enumerable:true,
        get:function(){
            return cnpjEnviado.replace(/\D+/g, '')
        }
    });
}

ValidaCpf.prototype.valida = function() {
    // Se o cpf estiver vazio retorna falso;
    if (typeof this.cpfLimpo === 'undefined') return false; 

    // Se o cpf for maior que 11 retorna falso;
    if (this.cpfLimpo.length > 11) return ;

    //Se for sequencia retorna falso;
    if (this.Sequencia()) return false;

    // Pega os 9 primeiros digitos do Cpf;
    const cpfParcial = this.cpfLimpo.slice(0, -2);

    // Primeiro digito
    const digito1 = this.criaDigito(cpfParcial);
    // Segundo digito
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    return true;
};

ValidaCpf.prototype.criaDigito = function(cpfParcial){
    //Transformando o cpf em Array;
    const cpfArray = Array.from(cpfParcial);

    //Pegando os digitos de 10 a 2 para fazer a multiplicação;
    let regressivo = cpfArray.length + 1;

    //Faz a conta do digito verificador;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);

    // Se o digito for maior que 9 retorna 0, se não retorna o digito
    return digito > 9 ? 0 : digito;
};



//Função caso o cpf seja sequencia;
ValidaCpf.prototype.Sequencia = function(){
    const issequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return issequencia === this.cpfLimpo;
}

const cpf = new ValidaCpf('148.600.206-42');
const cnpj = new ValidaCpf('17.082.438/0001-69');

