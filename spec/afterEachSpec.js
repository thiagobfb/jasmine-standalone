describe('Teste do afterEach', () => {
   
    let contador = 0;
    
    beforeEach(() => {
        contador++;
    });

    afterEach(() => {
        contador = 0
    });

    it('deve garantir o valor para 1 o contador ', () => {
        expect(contador).toEqual(1);
    });

    it('deve ainda garantir o contador com valor 1', () => {
        expect(contador).toEqual(1);
    }); 
});