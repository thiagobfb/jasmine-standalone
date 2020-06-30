describe('Testes do obejto toHaveBeenCalled', () => {
   
    let calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };
    
    beforeAll(() => {
        spyOn(calculadora, 'somar');
    });

    it('deve chamar o método somar ao menos 1 vez', () => {
       calculadora.somar(1, 10);
       expect(calculadora.somar).toHaveBeenCalled();
    });
});