describe('Testes do obejto calls.allArgs', () => {
   
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

    it('deve demonstrar o uso do call.allArgs', () => {
        calculadora.somar(1, 1);
        calculadora.somar(2, 2);
        expect(calculadora.somar.calls.allArgs()).toEqual([[1, 1], [2, 2]]);
    });
});