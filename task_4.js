function ElectricalDevice (deviceName, power) {
    this.deviceName = deviceName;
    this.power = power;
    this.status = 'Выключен';
}

ElectricalDevice.prototype.turnOn = function () {
    if (this.status !== 'Включен') {
        this.status = 'Включен';
    }
}

ElectricalDevice.prototype.turnOff = function () {
    if (this.status !== 'Выключен') {
        this.status = 'Выключен';
    }
}

ElectricalDevice.prototype.getData = function () {
    console.log(`${this.deviceName}: ${this.status}, мощность: ${this.power}`);
}

// Teapot
function Teapot(deviceName, power) {
    ElectricalDevice.call(this, deviceName, power);
    this.backLightIsOn = false;
    this.turnBackLightOn = function () {
        this.backLightIsOn = !this.backLightIsOn;
    }
}

Teapot.prototype = new ElectricalDevice();

const teapot = new Teapot('Чайник', '10 w');

teapot.turnBackLightOn();
teapot.turnOn();
teapot.getData();

//Computer

function Computer (deviceName, power) {
    ElectricalDevice.call(this, deviceName, power);
    this.gpuTemperature = '40 C'
    this.display = 'Выключен';
    this.turnOnDisplay = function () {
        if (this.display === 'Выключен') {
            this.display = 'Включен';
            this.gpuTemperature = '50 C';
        } else {
            this.display = 'Выключен';
        }
    }
}

Computer.prototype = new ElectricalDevice();

const hyperPC = new Computer('Hyper-PC', '650 w');

hyperPC.turnOnDisplay();
hyperPC.turnOn();
hyperPC.getData();