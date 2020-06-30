describe('Testes do obejto calls.callsFirstSpec', () => {
   
    let calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };
    
    beforeAll(() => {
        spyOn(calculadora, 'somar').and.returnValue(10);
        spyOn(calculadora, 'subtrair');
    });

    it('deve demonstrar o uso do call.callsFirstSpec', () => {
        calculadora.somar(1, 1);
        calculadora.somar(2, 2);
        
        let retorno = calculadora.somar.calls.first();
        expect(retorno.object).toEqual(calculadora);
        expect(retorno.args).toEqual([1, 1]);
        expect(retorno.returnValue).toEqual(10);
    });
});