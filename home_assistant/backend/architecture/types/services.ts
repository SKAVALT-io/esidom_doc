enum HA_Base_Services {
    CHECK_CONFIG = 'homeassistant.check_config',
    RELOAD_CORE_CONFIG = 'homeassistant.reload_core_config',
    RESTART = 'homeassistant.restart',
    STOP = 'homeassistant.stop',
    SET_LOCATION = 'homeassistant.set_location',
    // service data:
        // latitude : number; longitude: number
    TOGGLE = 'homeassistant.toggle',
    // service data:
        // entity_id: string
    TURN_ON = 'homeassistant.turn_on',
    // service data:
        // entity_id: string
    TURN_OFF = 'homeassistant.turn_off',
    // service data:
        // entity_id: string    
    UPDATE_ENTITY = 'homeassistant.update_entity',
    // service data:
        // entity_id: string | string[]
}

enum HA_Automation_Services {
    TURN_ON = 'automation.turn_on',
    // service data
        // entity_id: string | string[] | 'none' | 'all'
    TURN_OFF = 'automation.turn_off', // disable  automation triggers (opt: stop active actions)
    // service data
        // entity_id: string | string[] | 'none' | 'all'
        // stop_actions?: boolean
    TOGGLE = 'automation.toggle', // enable/saible automation triggers
    // service data
        // entity_id: string | string[] | 'none' | 'all'
    TRIGGER = 'automation.trigger', // trigger the action of an automation
    // service data
        // entity_id: string | string[] | 'none' | 'all'
        // skip_condition?: boolean
    RELOAD = 'automation.reload', // if creating/editing automations in yaml    
}