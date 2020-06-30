describe('Testes do obejto calls.mostRecent', () => {
   
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

    it('deve demonstrar o uso do call.mostRecent', () => {
        calculadora.somar(1, 1);
        calculadora.somar(2, 2);
        
        let retorno = calculadora.somar.calls.mostRecent();
        expect(retorno.object).toEqual(calculadora);
        expect(retorno.args).toEqual([2, 2]);
        expect(retorno.returnValue).toEqual(10);
    });
});