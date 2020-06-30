describe('Teste do beforeAll', () => {
   
    let contador = 0;
    
    beforeAll(() => {
        contador = 10;
    });

    beforeEach(() => {
        contador++;
    });

    it('deve garantir o valor 11 para o contador', () => {
        expect(contador).toEqual(11);
    });

    it('deve garantir o valor 12 para o contador', () => {
        expect(contador).toEqual(12);
    });
});