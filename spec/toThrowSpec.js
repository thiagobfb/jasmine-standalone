describe('Teste do toThrow', () => {
    it('deve demonstrar o uso do toThrow', () => {
        function multiplicar() {
            numero * 10;
        }

        function somar(n1, n2) {
            return n1 + n2;
        }

        expect(multiplicar).toThrow();
        expect(somar).not.toThrow();
    });
});