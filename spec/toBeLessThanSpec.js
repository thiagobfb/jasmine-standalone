describe('Teste do toBeLessThan', () => {
    it('deve demonstrar o uso do toBeLessThan', () => {
        let PI = 3.1415;
        
        expect(3).toBeLessThan(PI);
        expect(3.5).not.toBeLessThan(PI);
    });
});