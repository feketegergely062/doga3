describe('Célba ért: ', () => {
    it('10, 5 inputra ', () => {
        let act = getUnsuccessCount(10,5);
        expect(act).toBe(5)
    })
   it('88,10 inputra', () => {
    let act = getUnsuccessCount(88,10);
        expect(act).toBe(78)
   });
   it('10,999 inputra', () => {
    let act = getUnsuccessCount(10,999);
        expect(act).toBe(-989)
   });
   it('76,68 inputra ', () => {
    let act = getUnsuccessCount(76,86);
        expect(act).toBe(-10)
   });
    })
    describe('Nem ért célba:', () => {
        it('10,5 inputra 50%', () => {
            let act = getUnsuccessPercent(10,5);
            expect(act).toBeCloseTo(50, 0)
        });
        it('88,10 inputra 88,63%', () => {
            let act = getUnsuccessPercent(88,10);
            expect(act).toBeCloseTo(88.63, 0)
        });
        it('10,999 inputra -9890%', () => {
            let act = getUnsuccessPercent(10, 999);
            expect(act).toBeCloseTo(-9890, 0)
        });
        it('76,86 inputra -13.15%', () => {
            let act = getUnsuccessPercent(76,68);
            expect(act).toBeCloseTo(-13.15, 0)
        });
    });

