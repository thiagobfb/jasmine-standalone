describe('Testes do obejto calls.all', () => {
   
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

    it('deve demonstrar o uso do call.all', () => {
        calculadora.somar(1, 1);
        calculadora.somar(2, 2);
        
        let retorno = calculadora.somar.calls.all();
        expect(retorno[1].object).toEqual(calculadora);
        expect(retorno[1].args).toEqual([2, 2]);
        expect(retorno[1].returnValue).toEqual(10);
    });
});