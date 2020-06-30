describe('Testes do obejto and.returnValues', () => {
   
    let calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };
    
    beforeAll(() => {
        spyOn(calculadora, 'somar').and.returnValues(1, 5);
        spyOn(calculadora, 'subtrair');
    });

    it('deve deve retornar valores distintos para o método somar', () => {
        expect(calculadora.somar(1, 2)).toEqual(1);
        expect(calculadora.somar(1, 2)).toEqual(5);
        expect(calculadora.somar(1, 2)).toBeUndefined();
    });
});