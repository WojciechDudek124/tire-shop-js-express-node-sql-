class TireRecord {
    static listAll() {
        return [
            {
                id: 'abcd',
                brand: 'Debica frigo 205/16/55',
                count: 12,
            },
            {
                id: 'abcde',
                brand: 'Pirelli Xyz 225/17/45',
                count: 10,
            },
        ];
    }
}

module.exports = {
    TireRecord,
}