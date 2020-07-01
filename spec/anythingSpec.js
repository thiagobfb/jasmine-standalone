describe('Testes do obejto jasmine.anything', () => {
   
    let dobro;
    
    beforeAll(() => {
        dobro = jasmine.createSpy('dobro');
    });

    it('deve demonstrar o uso do jasmine.anything', () => {
        dobro(10);
        
        expect(dobro).toHaveBeenCalledWith(jasmine.anything());
        expect({}).toEqual(jasmine.anything());
    });

});