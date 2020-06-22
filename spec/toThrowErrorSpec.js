describe('Teste do toThrowError', () => {
    it('deve demonstrar o uso do toThrowError', () => {

        let somar = function(n1, n2) {
            if (n1 <=0 || n2 <= 0) {
                throw new TypeError('Deve ser maior que 0')
            } else {
                return n1 + n2;
            }
        }

        expect(() => { somar(0, 0) }).toThrowError();
        expect(() => { somar(0, 0) }).toThrowError('Deve ser maior que 0');
        expect(() => { somar(0, 0) }).toThrowError(/maior que 0/);
        expect(() => { somar(0, 0) }).toThrowError(TypeError);
        expect(() => { somar(0, 0) }).toThrowError(TypeError, 'Deve ser maior que 0');
        expect(() => { somar(1, 1) }).not.toThrowError();
    });
});