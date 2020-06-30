describe('Testes do obejto createSpyObj', () => {
   
    let calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    
    beforeAll(() => {
        spyOn(calculadora, 'somar');
    });

    it('deve possuir o objeto somar como não definido', () => {
        expect(calculadora.somar(1, 1)).toBeUndefined();
    });

    it('deve chamar o método somar duas vezes', () => {
        calculadora.somar(1, 1);
        calculadora.somar(1, 2)
        expect(calculadora.somar).toHaveBeenCalledTimes(3);
    });

    it('deve chamar o método somar com os parâmetros válidos', () => {
        calculadora.somar(1, 1);
        calculadora.somar(1, 2)
        expect(calculadora.somar).toHaveBeenCalledWith(1, 1);
        expect(calculadora.somar).toHaveBeenCalledWith(1, 2);
    });
});