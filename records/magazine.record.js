class MagazineRecord{
    static listAll() {
        return [
            {
                id: 'abcd1',
                magazineNumber: 'nr 1',
                model: 'Debica frigo 205/16/55',
            },
            {
                id: 'abcde2',
                magazineNumber: 'nr 2',
                model: 'Pirelli Xyz 225/17/45',
            },
        ];
    }
}

module.exports = {
    MagazineRecord,
}