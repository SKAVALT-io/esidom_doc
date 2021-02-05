interface LightEntity {
    brightness: number; // value in [0,  255]. Default: None (@todo: check this)
    color_temp: number; // color_temp value in mireds
    effect: string; // current effect. Default: None
    effect_list: string[]; // list of supported effects. Default: None
    hs_color: number[]; // hue and saturation color [float, float]
    is_on: boolean; // light on or off
    max_mireds: number; // warmest_color temp supported by the light
    min_mireds: number; // coldest color_temp supported by the light
    supported_features: LightEntitySupportedFeatures;
}

enum LightEntitySupportedFeatures {
    SUPPORT_BRIGHTNESS = 1,
    SUPPORT_COLOR,
    SUPPORT_COLOR_TEMP,
    SUPPORT_EFFECT,
    SUPPORT_FLASH,
    SUPPORT_TRANSITION,
    SUPPORT_WHITE_VALUE
}