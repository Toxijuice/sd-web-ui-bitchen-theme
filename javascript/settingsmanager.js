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

        BitchenSettingsManager.AddSliderListener('setting_bitchen_base_hue', function (e) {
            if (bitchenColorManager !== null) {
                if (!e.target.value || e.target.value === null) {
                    if (bitchenColorCycleEnabled) {
                        bitchenColorManager.hueBaseWaiting = 0;
                    } else {
                        bitchenColorManager.SetHue(0);
                    }
                } else {
                    if (bitchenColorCycleEnabled) {
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

                bitchenColorCycleEnabled = e.target.checked;
                if (!bitchenColorCycleEnabled) {
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