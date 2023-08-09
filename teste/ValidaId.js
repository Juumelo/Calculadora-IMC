
const Id = new ValidaId('14860020640');

function ValidaId(idEnviado){

    Object.defineProperty(this, 'idLimpo',{
        enumerable:true,
        get:function(){
            return idEnviado.replace(/\D+/g, '')
        }
    });
    
}


ValidaId.prototype.valida = function() {

    if (typeof this.idLimpo === 'undefined')  return false; 
    if (this.idLimpo.length !=11 && this.idLimpo.length !=14 ) return false;
    if (this.Sequencia()) return false;

    const idParcialcnpj = this.idLimpo.slice(0, -2);
    const digito1cnpj = this.digitosCnpj(idParcialcnpj);
    const digito2cnpj = this.digitosCnpj(idParcialcnpj + digito1cnpj);
    const cnpjGerado= idParcialcnpj + String(digito1cnpj) + String(digito2cnpj)
    
    const idParcialcpf = this.idLimpo.slice(0, -2);
    const digito1cpf = this.digitosCpf(idParcialcpf);
    const digito2cpf = this.digitosCpf(idParcialcpf + digito1cpf);
    const cpf = idParcialcpf + String(digito1cpf) + String(digito2cpf);

    if (this.idLimpo === cnpjGerado) return true;
    if (this.idLimpo === cpf) return true;

    else return false;

};

ValidaId.prototype.digitosCpf = function(idParcialcpf){

    const cpfArray = Array.from(idParcialcpf);

    let regressivo = cpfArray.length + 1;

    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo--;
        return ac;
    }, 0);
    const digito = 11 - (total % 11);
    return digito > 9 ? 0 : digito;

};

ValidaId.prototype.digitosCnpj = function(idParcialcnpj){

    const cnpjArray = Array.from(idParcialcnpj);

    const regressivo = [6,5,4,3,2,9,8,7,6,5,4,3,2]
    regressivo.reverse();
    cnpjArray.reverse();
    
    let total = 0
    for (i=0; i<cnpjArray.length; i++){
        total += cnpjArray[i] * regressivo[i];    
    }
    const resto = total % 11;
    return (resto === 0 || resto === 1) ? 0 : 11 - resto;
};

ValidaId.prototype.Sequencia = function(){
    const issequencia = this.idLimpo[0].repeat(this.idLimpo.length);
    return issequencia === this.idLimpo;
}

console.log(Id.valida());

