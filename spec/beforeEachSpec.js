describe('Teste do beforeEach', () => {
   
    let contador = 0;
    
    beforeEach(() => {
        contador++;
    });

    it('deve incrementar o valor para 1', () => {
        console.log('Before each contador step 1: ' + contador);
        expect(contador).toEqual(1);
    });

    it('deve incrementar o valor para 2', () => {
        console.log('Before each contador step 2: ' + contador);
        expect(contador).toEqual(2);
    });
   
});