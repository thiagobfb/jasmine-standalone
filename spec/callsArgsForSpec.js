describe('Testes do obejto calls.argsFor', () => {
   
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

    it('deve demonstrar o uso do call.argsFor', () => {
        calculadora.somar(1, 1);
        calculadora.somar(2, 2);
        expect(calculadora.somar.calls.argsFor(0)).toEqual([1, 1]);
        expect(calculadora.somar.calls.argsFor(1)).toEqual([2, 2]);
    });
});