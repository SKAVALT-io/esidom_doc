interface Sensor {
    attributes?: any;
    device_class?: BinarySensorDeviceClasses | SensorDeviceClasses;
    icon?: string; // prefixed by 'mdi:'. If absent, default = 'mdi:cellphone'
    name: string;
    state: boolean | number | string;
    type: SensorTypes;
    unique_id: string;
    unif_of_measurement?: string;
}

interface SensorUpdateRequest {
    attributes?: any;
    icon?: string;
    state: boolean | number | string;
    type: SensorTypes;
    unique_id: string;
}

enum SensorTypes {
    BINARY_SENSOR = 'binary_sensor',
    SENSOR = 'sensor'
}

enum BinarySensorDeviceClasses {
    None = 'None', // on/off
    battery = 'battery', // on = low | off = normal
    battery_charging = 'battery_charging', // on = charging | off = not charging
    cold = 'cold', // on = cold | off = normal
    connectivity = 'connectivity', // on = connected | off = disconnected
    door = 'door', // on = open | off = closed
    garage_door = 'garage_door', // on = open | off = closed
    gas = 'gas', // on = gas detected | off = clear
    heat = 'heat', // on = hot | off = normal
    light = 'light', // on = light detected | off = no light
    lock = 'lock', // on = unlocked | off = locked
    moisture = 'moisture', // on = wet | off = dry
    motion = 'motion', // on = motion detected | off = clear
    moving = 'moving', // on = moving | off = not moving
    occupancy = 'occupancy', // on = occupied | off = clear
    openbing = 'openbing', // on = open | off = closed
    plug = 'plug', // on = device plugged | off = device unplugged
    power = 'power', // on = power | off = no power
    presence = 'presence', // on = home | off = away
    problem = 'problem', // on = problem | off = ok
    safety = 'safety', // on = unsafe | off = safe
    smoke = 'smoke', // on = detected | off = clear
    sound = 'sound', // on = detected | off = clear
    vibration = 'vibration', // on = detected | off = clear
    window = 'window', // on = open | off = closed
}

enum SensorDeviceClasses {
    None = 'None',
    battery = 'battery', // percent of battery left
    humidity = 'humidity', // percent of humidity in the air
    illuminance = 'illuminance', // light level in lx or lm
    signal_strength = 'signal_strength', // strength in dB or dBm
    temperature = 'temperature', // in °C or °F
    power = 'power', // in W or kW
    pressure = 'pressure', // in hPa or mbar
    timestamp = 'timestamp', // Datetime object or timestamp UTC string
    current = 'current', // in A
    energy = 'energy', // in Wh or kWh
    power_factor = 'power_factor', // in %
    voltage = 'voltage' // in V
}