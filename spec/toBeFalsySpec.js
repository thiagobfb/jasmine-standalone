describe('Teste do toBeFalsy', () => {
    it('deve demonstrar o uso do toBeFalsy', () => {
        let n2 = undefined;
        let n3 = 0;
        let n4 = '';
        let n5 = null;
        let n6 = NaN;
        let n7;

        expect(n5).toBeFalsy();
        expect(n2).toBeFalsy();
        expect(n4).toBeFalsy();
        expect(false).toBeFalsy();
        expect(n6).toBeFalsy();
        expect(n3).toBeFalsy();

        expect(true).not.toBeFalsy();
    });
});