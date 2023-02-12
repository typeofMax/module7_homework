class ElectricalDevice {
    constructor(deviceName, power) {
        this.deviceName = deviceName;
        this.power = power;
        this.status = 'Выключен';
    }

    turnOn() {
        if (this.status !== 'Включен') {
            this.status = 'Включен';
        }
    }

    turnOff () {
        if (this.status !== 'Выключен') {
            this.status = 'Выключен';
        }
    }

    getData() {
        console.log(`${this.deviceName}: ${this.status}, мощность: ${this.power}`);
    }
}

class Teapot extends ElectricalDevice {
    constructor(deviceName, power) {
        super(deviceName, power);
        this.backLightIsOn = false;
    }

    turnBackLightOn() {
        this.backLightIsOn = !this.backLightIsOn;
    }
}

class Computer extends ElectricalDevice {
    constructor(deviceName, power) {
        super(deviceName, power);
        this.gpuTemperature = '40 C'
        this.display = 'Выключен';
    }

    turnOnDisplay() {
        if (this.display === 'Выключен') {
            this.display = 'Включен';
            this.gpuTemperature = '50 C';
        } else {
            this.display = 'Выключен';
        }
    }
}

const teapot = new Teapot('Чайник', '10 w');
const hyperPC = new Computer('Hyper-PC', '650 w');

teapot.getData();
teapot.turnOn();
teapot.turnBackLightOn();
teapot.getData();

hyperPC.getData();
hyperPC.turnOnDisplay();
hyperPC.turnOn();
hyperPC.getData();