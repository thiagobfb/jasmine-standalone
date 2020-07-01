describe('Testes do obejto jasmine.any', () => {
   
    let dobro;
    
    beforeAll(() => {
        dobro = jasmine.createSpy('dobro');
    });

    it('deve demonstrar o uso do jasmine.any', () => {
        dobro(10);
        
        expect(dobro).toHaveBeenCalledWith(jasmine.any(Number));
    
    });

});