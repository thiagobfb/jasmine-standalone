describe('Teste do toContain', () => {
    it('deve demonstrar o uso do toContain', () => {
        let texto = 'Meu nome é Thiago';
        let frutas = ['laranja', 'banana', 'pera'];
        
        expect(texto).toContain('Thiago');
        expect(texto).not.toContain('thiago');
        
        expect(frutas).toContain('laranja');
        expect(frutas).not.toContain('uva');
    });
});