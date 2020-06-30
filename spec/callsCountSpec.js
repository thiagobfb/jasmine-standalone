describe('Testes do obejto calls.count', () => {
   
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

    it('deve demonstrar o uso do call.count', () => {
        calculadora.somar(1, 1);
        calculadora.somar(1, 2);
        expect(calculadora.somar.calls.count()).toEqual(2);
    });
});