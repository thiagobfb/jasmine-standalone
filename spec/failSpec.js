describe('Teste do fail', () => {
    it('deve demonstrar o uso do fail', () => {
        let operacao = (executar, callback) => {
            if (executar) {
                callback();
            }
        }; 
        
        operacao(false, () => {
            fail('Não deve executar função de callback');
        });
    });
});