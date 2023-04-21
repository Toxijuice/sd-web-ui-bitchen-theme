"use strict";
var bitchenSettingsInitialized = false;

class BitchenSettingsManager {
    static FindChildElementsByType(element, type) {
        var matchingElements = [];
        var children = element.getElementsByTagName('*');
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeName.toLowerCase() === type.toLowerCase()) {
                matchingElements.push(children[i]);
            }
        }
        return matchingElements;
    }

    static GetAllChildrenOfTypeByID(id, type) {
        var element = document.getElementById(id);
        return this.FindChildElementsByType(element, type);
    }

    static GetFirstChildOfType(element, type) {
        var children = this.FindChildElementsByType(element, type);
        if (children.length > 0) {
            return children[0];
        } else {
            return null;
        }
    }

    static GetFirstChildOfTypeByID(id, type) {
        var element = document.getElementById(id);
        if (element === null) return null;
        else return this.GetFirstChildOfType(element, type);
    }

    static AddListenerToInput(event, id, callback) {
        var inputs = this.GetAllChildrenOfTypeByID(id, 'input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener(event, callback);
        }
    }

    static AddSliderListener(id, callback) {
        this.AddListenerToInput('change', id, callback);
        this.AddListenerToInput('input', id, callback);
    }
}

onUiTabChange(() => {
    if (!bitchenSettingsInitialized) {
        bitchenSettingsInitialized = true;

        // fetch('./file=config.json')
        //     .then((response) => response.json())
        //     .then((config) => {
        //         console.log(config['bitchen_base_hue'])
        //         console.log(config['bitchen_color_cycle'])
        //         console.log(config['bitchen_color_cycle_framerate'])
        //         console.log(config['bitchen_color_cycle_speed'])
        //         console.log(config['bitchen_dist_hue'])
        //         console.log(config['bitchen_img2img_rearrange'])
        //         console.log(config['bitchen_txt2img_rearrange'])
        //     });

        BitchenSettingsManager.AddSliderListener('setting_bitchen_base_hue', function (e) {
            if (bitchenColorManager !== null) {
                if (!e.target.value || e.target.value === null) {
                    if (bitchenColorManager.colorCycleEnabled) {
                        bitchenColorManager.hueBaseWaiting = 0;
                    } else {
                        bitchenColorManager.SetHue(0);
                    }
                } else {
                    if (bitchenColorManager.colorCycleEnabled) {
                        bitchenColorManager.hueBaseWaiting = parseFloat(e.target.value);
                    } else {
                        bitchenColorManager.SetHue(parseFloat(e.target.value));
                    }
                }
            }
        });

        BitchenSettingsManager.AddSliderListener('setting_bitchen_dist_hue', function (e) {
            if (bitchenColorManager !== null) {
                if (!e.target.value || e.target.value === null) {
                    bitchenColorManager.SetHueDist(0);
                } else {
                    bitchenColorManager.SetHueDist(parseFloat(e.target.value));
                }
            }
        });

        BitchenSettingsManager.AddListenerToInput('change', 'setting_bitchen_color_cycle', function (e) {
            if (bitchenColorManager !== null) {

                bitchenColorManager.colorCycleEnabled = e.target.checked;
                if (bitchenColorManager.colorCycleEnabled) {
                    BitchenStartColorLoop();
                }else{
                    bitchenColorManager.SetHue(bitchenColorManager.hueBaseWaiting);
                }
            }
        });

        BitchenSettingsManager.AddSliderListener('setting_bitchen_color_cycle_speed', function (e) {
            if (bitchenColorManager !== null) {
                if (!e.target.value || e.target.value === null) {
                    bitchenColorManager.SetCycleSpeed(1.00);
                } else {
                    bitchenColorManager.SetCycleSpeed(parseFloat(e.target.value));
                }
            }
        });

        BitchenSettingsManager.AddSliderListener('setting_bitchen_color_cycle_framerate', function (e) {
            if (bitchenColorManager !== null) {
                if (!e.target.value || e.target.value === null) {
                    bitchenColorManager.SetFramerate(12);
                } else {
                    bitchenColorManager.SetFramerate(Math.floor(parseFloat(e.target.value)));
                }
            }
        });


    }
});

