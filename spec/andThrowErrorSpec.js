describe('Testes do obejto and.throwError', () => {
   
    let calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };
    
    beforeAll(() => {
        spyOn(calculadora, 'somar').and.throwError('erro');
        spyOn(calculadora, 'subtrair');
    });

    it('deve lançar um erro ao somar', () => {
        expect(() => { calculadora.somar(5, 3); }).toThrowError('erro');
    });
});