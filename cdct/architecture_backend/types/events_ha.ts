
const events = {
    state_changed: {
        entity_id: "light.kitchen",
        // @todo: list states ?
        old_state: "previousState", // omitted if entity is new
        new_state: "newState" // omitted if entity has been removed
    },
    time_changed: { // fired every seconds
        now: "_currentTimeUTC_"
    },
    service_registered: {
        domain: "ligh", // @todo: list domains
        service: "turn_on" // @todo: list services
    },
    call_service: {
        domain: "light",
        service: "turn_on",
        service_data : { //service parameters @todo : list them
            "brightness": 120
        },
        service_call_id: "uniqueCallId"
    },
    service_executed: { // when service is done
        service_call_id: "uniqueCallId"
    },
    automation_reloaded: {} // no data
    ,
    scene_reloaded: {} // no data
    ,
    platform_discovered: { // when discovery comp finds new platform
        service: "zwave", // @todo: list platforms
        discovered: { // dict with discovery infos
            host: "192.168.1.10",
            port: "8889"
        }
    },
    component_loaded: {
        component: "light" // domain of the integration initialized
    }
};
