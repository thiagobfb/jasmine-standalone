describe('Testes do obejto and.callFake', () => {
   
    let calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        },
        subtrair: function (n1, n2) {
            return n1 - n2;
        }
    };
    
    beforeAll(() => {
        spyOn(calculadora, 'somar').and.callFake((n1, n2) => {
            return n1 - n2;
        });
        spyOn(calculadora, 'subtrair');
    });

    it('deve transformar o método somar em uma subtração', () => {
        expect(calculadora.somar(5, 3)).toEqual(2);
    });
});