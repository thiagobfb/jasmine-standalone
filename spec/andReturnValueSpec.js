describe('Testes do obejto and.returnValue', () => {
   
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

    it('deve deve retornar 10 para o método somar', () => {
        expect(calculadora.somar(1, 2)).toEqual(10);
    });
});