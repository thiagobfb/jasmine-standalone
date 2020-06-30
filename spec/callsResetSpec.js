describe('Testes do obejto calls.callsResetSpec', () => {
   
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

    it('deve demonstrar o uso do call.callsResetSpec', () => {
        calculadora.somar(1, 1);
        calculadora.somar(2, 2);
        
        expect(calculadora.somar.calls.any()).toBeTruthy();
        calculadora.somar.calls.reset();
        
        expect(calculadora.somar.calls.any()).toBeFalsy();
    });
});