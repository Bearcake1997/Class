class Temperature {

    _temperature;
    _kTemp;
    _fTemp;
    _unit = 'CELSIUS';
    // độ C
    // độ K
    // độ F
    // ==> 3 toString khác nhau
    // độ K = ... K
    // độ F = ... F
    // độ C = ... C
    constructor(temperature) {
        if (Number(temperature) < -273.15) {
            throw new Error("Nhiệt độ khum thể bé hơn -273.15 nha bạn mình ơi");
        } else {
            this._temperature = Number(temperature);
            this._kTemp = this._temperature + 273.15;
            this._fTemp = this._temperature * 9 / 5 + 32;
        }
    }

    toFahrenheit() {
        this._unit = "FAHRENHEIT";
        return this;
    }

    toKelvin() {
        this._unit = "KELVIN";
        return this;
    }

    toString() {
        switch (this._unit) {
            case 'FAHRENHEIT':
                return (this._fTemp) + " F";
            case 'KELVIN':
                return (this._kTemp) + " K";
            default:
                return (this._temperature) + " C";
        }
    }

}

