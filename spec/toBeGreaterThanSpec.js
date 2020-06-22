describe('Teste do toBeGreaterThan', () => {
    it('deve demonstrar o uso do toBeGreaterThan', () => {
        let PI = 3.1415;
        
        expect(4).toBeGreaterThan(PI);
        expect('5').toBeGreaterThan(PI);
        expect(3).not.toBeGreaterThan(PI);
    });
});