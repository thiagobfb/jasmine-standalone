describe('Testes do obejto and.callThrough', () => {
   
    let calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };
    
    beforeAll(() => {
        spyOn(calculadora, 'somar').and.callThrough();
        spyOn(calculadora, 'subtrair');
    });

    it('deve executar o método somar original', () => {
        expect(calculadora.somar(1, 1)).toEqual(2);
        expect(calculadora.subtrair(2, 1)).toBeUndefined();
    });
});