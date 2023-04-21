var bitchenColorManager = null;

class BitchenColorManager {
    constructor() {
        this.colorCycleEnabled = false;
        this.roo = document.querySelector(':root');
        this.dark = document.querySelector('.dark');
        this.time = Math.random() * 240; // Random start time between 0 and 4 minutes
        this.cyclespeeddefault = 0.0078125;
        this.cyclespeed = this.cyclespeeddefault;
        this.animfps = 12;
        this.throttlems = (1 / this.animfps) / 0.001; // fps to ms per frame
        this.hueBaseWaiting = 0;
        this.hueBase = 0;
        this.hueDist = -0.03;
        this.col = { r: 0, g: 0, b: 0 };
        this.colAccent = { r: 0, g: 0, b: 0 };
        this.colAccent25 = { r: 0, g: 0, b: 0 };
        this.colTextbox = { r: 0, g: 0, b: 0, a: 0.75 };
        this.col75 = { r: 0, g: 0, b: 0 };
        this.col50 = { r: 0, g: 0, b: 0 };
        this.col20 = { r: 0, g: 0, b: 0 };
        this.col10 = { r: 0, g: 0, b: 0 };
        this.collogo0 = { r: 0, g: 0, b: 0 };
        this.collogo1 = { r: 0, g: 0, b: 0 };
        this.collogo2 = { r: 0, g: 0, b: 0 };
        this.collogo3 = { r: 0, g: 0, b: 0 };
        this.collogo4 = { r: 0, g: 0, b: 0 };

        this.hsvvars = { r: 0, g: 0, b: 0, i: 0, f: 0, p: 0, q: 0, t: 0 } // Frequently reused vars
    }

    SetColHSVtoRGB(colobj, h, s, v) {
        this.hsvvars.i = Math.floor(h * 6);
        this.hsvvars.f = h * 6 - this.hsvvars.i;
        this.hsvvars.p = v * (1 - s);
        this.hsvvars.q = v * (1 - this.hsvvars.f * s);
        this.hsvvars.t = v * (1 - (1 - this.hsvvars.f) * s);

        switch (this.hsvvars.i % 6) {
            case 0: this.hsvvars.r = v, this.hsvvars.g = this.hsvvars.t, this.hsvvars.b = this.hsvvars.p; break;
            case 1: this.hsvvars.r = this.hsvvars.q, this.hsvvars.g = v, this.hsvvars.b = this.hsvvars.p; break;
            case 2: this.hsvvars.r = this.hsvvars.p, this.hsvvars.g = v, this.hsvvars.b = this.hsvvars.t; break;
            case 3: this.hsvvars.r = this.hsvvars.p, this.hsvvars.g = this.hsvvars.q, this.hsvvars.b = v; break;
            case 4: this.hsvvars.r = this.hsvvars.t, this.hsvvars.g = this.hsvvars.p, this.hsvvars.b = v; break;
            case 5: this.hsvvars.r = v, this.hsvvars.g = this.hsvvars.p, this.hsvvars.b = this.hsvvars.q; break;
        }

        colobj.r = Math.round(this.hsvvars.r * 255);
        colobj.g = Math.round(this.hsvvars.g * 255);
        colobj.b = Math.round(this.hsvvars.b * 255);
    }

    HSVtoRGB(h, s, v) {
        var r, g, b, i, f, p, q, t;
        if (arguments.length === 1) {
            s = h.s, v = h.v, h = h.h;
        }
        i = Math.floor(h * 6);
        f = h * 6 - i;
        p = v * (1 - s);
        q = v * (1 - f * s);
        t = v * (1 - (1 - f) * s);
        switch (i % 6) {
            case 0: r = v, g = t, b = p; break;
            case 1: r = q, g = v, b = p; break;
            case 2: r = p, g = v, b = t; break;
            case 3: r = p, g = q, b = v; break;
            case 4: r = t, g = p, b = v; break;
            case 5: r = v, g = p, b = q; break;
        }
        return {
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        };
    }

    RGBtoHSV(r, g, b) {
        if (arguments.length === 1) {
            g = r.g, b = r.b, r = r.r;
        }
        var max = Math.max(r, g, b), min = Math.min(r, g, b),
            d = max - min,
            h,
            s = (max === 0 ? 0 : d / max),
            v = max / 255;

        switch (max) {
            case min: h = 0; break;
            case r: h = (g - b) + d * (g < b ? 6 : 0); h /= 6 * d; break;
            case g: h = (b - r) + d * 2; h /= 6 * d; break;
            case b: h = (r - g) + d * 4; h /= 6 * d; break;
        }

        return {
            h: h,
            s: s,
            v: v
        };
    }

    SetDefaultTheme() {
        this.SetHue(0.95);
        this.SetHueDist(-0.15);
    }

    SetHue(hue) {
        this.hueBase = hue;
        this.hueBaseWaiting = hue;
        this.SetColorScheme(this.hueBase, this.hueBase + this.hueDist);
    }

    SetHueDist(dist) {
        this.hueDist = dist;
        this.SetColorScheme(this.hueBase, this.hueBase + this.hueDist);
    }

    SetCycleSpeed(speed) {
        this.cyclespeed = this.cyclespeeddefault * speed;
    }

    SetFramerate(framerate) {
        this.animfps = framerate;
        this.throttlems = (1 / this.animfps) / 0.001; // fps to ms per frame
    }

    CorrectHue(hue) {
        if (hue < 0.00) hue = hue % 1.00;
        if (hue < 0.00) hue = hue + 1.00;

        return hue + 1.00;
    }

    Lerp(a, b, t) {
        return (1 - t) * a + t * b;
    }

    SetColLerpRGB(tarCol, colA, colB, t) {
        tarCol.r = this.Lerp(colA.r, colB.r, t);
        tarCol.g = this.Lerp(colA.g, colB.g, t);
        tarCol.b = this.Lerp(colA.b, colB.b, t);
    }

    SetColorScheme(hueMain, hueAccent) {
        hueMain = this.CorrectHue(hueMain);
        hueAccent = this.CorrectHue(hueAccent);

        this.SetColHSVtoRGB(this.col, hueMain, 0.90, 0.75);
        this.SetColHSVtoRGB(this.colAccent, hueAccent, 0.90, 0.75);
        this.SetColHSVtoRGB(this.colTextbox, hueMain, 1.00, 0.075);
        this.SetColHSVtoRGB(this.collogo0, hueMain, 0.80, 0.90);
        this.SetColHSVtoRGB(this.collogo4, hueAccent, 1.00, 0.40);

        this.SetColLerpRGB(this.collogo1, this.collogo0, this.collogo4, 0.40);
        this.SetColLerpRGB(this.collogo2, this.collogo0, this.collogo4, 0.60);
        this.SetColLerpRGB(this.collogo3, this.collogo0, this.collogo4, 0.80);

        // this.col75.r = this.col.r * 0.75;
        // this.col75.g = this.col.g * 0.75;
        // this.col75.b = this.col.b * 0.75;

        this.col50.r = this.col.r * 0.50;
        this.col50.g = this.col.g * 0.50;
        this.col50.b = this.col.b * 0.50;

        this.col20.r = this.col.r * 0.20;
        this.col20.g = this.col.g * 0.20;
        this.col20.b = this.col.b * 0.20;

        this.col10.r = this.col.r * 0.10;
        this.col10.g = this.col.g * 0.10;
        this.col10.b = this.col.b * 0.10;

        this.colAccent25.r = this.colAccent.r * 0.25;
        this.colAccent25.g = this.colAccent.g * 0.25;
        this.colAccent25.b = this.colAccent.b * 0.25;

        this.roo.style.setProperty(
            '--colorPrimary',
            'rgb(' +
            this.col.r + ',' +
            this.col.g + ',' +
            this.col.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorAccent',
            'rgb(' +
            this.colAccent.r + ',' +
            this.colAccent.g + ',' +
            this.colAccent.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorFillTertiary',
            'rgba(' +
            this.colTextbox.r + ',' +
            this.colTextbox.g + ',' +
            this.colTextbox.b + ',' +
            this.colTextbox.a +
            ')'
        );

        this.roo.style.setProperty(
            '--ring-color',
            'rgb(' +
            this.colAccent.r + ',' +
            this.colAccent.g + ',' +
            this.colAccent.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorBorder',
            'rgb(' +
            this.colAccent.r + ',' +
            this.colAccent.g + ',' +
            this.colAccent.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorPrimaryBorderHover',
            'rgb(' +
            this.col50.r + ',' +
            this.col50.g + ',' +
            this.col50.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorPrimaryText',
            'rgb(' +
            this.col.r + ',' +
            this.col.g + ',' +
            this.col.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorPrimaryBgHover',
            'rgb(' +
            this.colAccent25.r + ',' +
            this.colAccent25.g + ',' +
            this.colAccent25.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorBgContainer',
            'rgb(' +
            this.col20.r + ',' +
            this.col20.g + ',' +
            this.col20.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorPrimaryBg',
            'rgb(' +
            this.col10.r + ',' +
            this.col10.g + ',' +
            this.col10.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorBgElevated',
            'rgb(' +
            this.col10.r + ',' +
            this.col10.g + ',' +
            this.col10.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorLogoMain0',
            'rgb(' +
            this.collogo0.r + ',' +
            this.collogo0.g + ',' +
            this.collogo0.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorLogoMain1',
            'rgb(' +
            this.collogo1.r + ',' +
            this.collogo1.g + ',' +
            this.collogo1.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorLogoMain2',
            'rgb(' +
            this.collogo2.r + ',' +
            this.collogo2.g + ',' +
            this.collogo2.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorLogoMain3',
            'rgb(' +
            this.collogo3.r + ',' +
            this.collogo3.g + ',' +
            this.collogo3.b +
            ')'
        );

        this.roo.style.setProperty(
            '--colorLogoMain4',
            'rgb(' +
            this.collogo4.r + ',' +
            this.collogo4.g + ',' +
            this.collogo4.b +
            ')'
        );

    }

    Update(dt) {
        this.time = this.time + dt * 0.001; // ms to seconds
        if (this.time > 7200) this.time -= 7200; // Reset time every 2 hours

        this.hueBase = this.time * this.cyclespeed;
        this.SetColorScheme(this.hueBase, this.hueBase + this.hueDist);
    }

}

document.addEventListener('DOMContentLoaded', () => {
    bitchenColorManager = new BitchenColorManager();
    bitchenColorManager.SetDefaultTheme();

    //Null checking function... Also null returning if all null. Very fun.
    function GetConfigValue(tarObj, config, tarVal, val) {
        if (tarObj[tarVal]) return config[val] ? config[val] : tarObj[tarVal]
        return null
    }

    fetch('./file=config.json')
        .then((response) => response.json())
        .then((config) => {

            bitchenColorManager.SetHue(GetConfigValue(bitchenColorManager, config, 'hueBase', 'bitchen_base_hue'))
            bitchenColorManager.SetHueDist(GetConfigValue(bitchenColorManager, config, 'hueDist', 'bitchen_dist_hue'))
            bitchenColorManager.SetFramerate(GetConfigValue(bitchenColorManager, config, 'animfps', 'bitchen_color_cycle_framerate'))
            bitchenColorManager.SetCycleSpeed(GetConfigValue(bitchenColorManager, config, 'cyclespeed', 'bitchen_color_cycle_speed'))
            bitchenColorManager.colorCycleEnabled = config['bitchen_color_cycle']

            var dt = 0;
            var lasttime = 0;
            var elapsedms = 0;

            function loop(timestamp) {
                if (bitchenColorManager.colorCycleEnabled) {
                    dt = timestamp - lasttime;
                    elapsedms += dt;
                    lasttime = timestamp;

                    if (elapsedms >= bitchenColorManager.throttlems) {
                        bitchenColorManager.Update(elapsedms);
                        elapsedms = 0;
                    }
                }

                window.requestAnimationFrame(loop); // continue loop
            }

            window.requestAnimationFrame(loop); // start loop
        });
});