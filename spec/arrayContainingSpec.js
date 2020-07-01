describe('Testes do obejto jasmine.arrayContaining', () => {
   
    let numeros;
    
    beforeAll(() => {
        numeros = [1, 2, 3, 4, 5];
    });

    it('deve demonstrar o uso do jasmine.arrayContaining', () => {
        expect(numeros).toEqual(jasmine.arrayContaining([5]));
        expect(numeros).not.toEqual(jasmine.objectContaining([6]));
    });

});