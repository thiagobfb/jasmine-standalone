describe('Suite externa', () => {
   
    let contadorExterno = 0;

    beforeEach(() => {
        contadorExterno++;
    });

    it('deve conter 1 para contador externo', () => {
        console.log('Aninhar suites contadorExterno step 1: ' + contadorExterno);
        expect(contadorExterno).toEqual(1);
    });

    describe('Suite interna', () => {
        let contadorInterno = 0;

        beforeEach(() => {
            contadorInterno++;
        });
    
        it('deve validar o valor dos contadores', () => {
            console.log('Aninhar suites contadorInterno step 1: ' + contadorInterno);
            console.log('Aninhar suites contadorExterno step 2: ' + contadorExterno);
            expect(contadorInterno).toEqual(1);
            expect(contadorExterno).toEqual(2);
        });
    });
});