let meuMatcher = {
    toBeValidEmail: function(util, customEqualityTesters) {
        let emailRegex = /\S+@\S+\.\S+/;
        return {
            compare: function(actual, expected) {
                let result = {};
                if (expected === undefined) {
                    result.pass = emailRegex.test(actual);
                } else {
                    result.pass = expected.test(expected);
                }

                if (result.pass) {
                    result.message = actual + 'é um email válido';
                } else {
                    result.message = actual + 'não é um email válido';
                }

                return result;
            }
        }
    }
};


describe('Testes do obejto jasmine.addMatchers', () => {
   
    let calculadora = {
        somar: function (n1, n2) {
            return n1 + n2;
        }
    };

    beforeEach(() => {
        jasmine.addMatchers(meuMatcher);
    });
    
    beforeAll(() => {
        spyOn(calculadora, 'somar');
    });

    it('deve verificar se um email é válido', () => {
        expect('email@dominio.com').toBeValidEmail();
        expect('email@').not.toBeValidEmail();
    });

});