"use strict";

// If anyone knows how to rearrange the panels better
// please let me know. This seems really bad.
var rearranged = false;

class PageRearranger {
    static rearrangePage() {
        //txt2img
        var txt2imgtoprow = document.getElementById("txt2img_toprow");
        var txt2imgtoprowparent = txt2imgtoprow.parentElement;
        var txt2imgresultspanel = document.getElementById("txt2img_results");
        var txt2imgsettingspanel = document.getElementById("txt2img_settings");
        var txt2imggeneratebox = document.getElementById("txt2img_generate_box");
        var txt2imgbottomhalf = txt2imgresultspanel.parentElement;
        var txt2imggallerycontainer = document.getElementById("txt2img_gallery_container");
        var txt2imggallerybuttons = document.getElementById("image_buttons_txt2img");
        var txt2imggallerybuttonscontainer = txt2imggallerybuttons.parentElement;
        var txt2imgpresetmanager = document.getElementById("txt2img_preset_manager_accordion");
        var txt2imgactions = document.getElementById("txt2img_actions_column");
        var txt2imgtools = document.getElementById("txt2img_tools");
        var txt2imgstylesrow = document.getElementById("txt2img_styles_row");
        var txt2imghtmlinfo = document.getElementById("html_info_txt2img");
        var txt2imgpromptdetails = txt2imghtmlinfo.parentElement;
        var txt2imgpromptcontainer = document.getElementById("txt2img_prompt_container");
        var txt2imgprompt = txt2imgpromptcontainer.children[0];
        var txt2imgnegprompt = txt2imgpromptcontainer.children[1];

        txt2imgbottomhalf.appendChild(txt2imgsettingspanel);

        txt2imgresultspanel.appendChild(txt2imgstylesrow);
        txt2imgresultspanel.appendChild(txt2imgtools);
        txt2imgresultspanel.appendChild(txt2imggeneratebox);
        txt2imgresultspanel.appendChild(txt2imggallerycontainer);
        txt2imgresultspanel.appendChild(txt2imggallerybuttons);
        txt2imgresultspanel.appendChild(txt2imgpromptdetails);

        txt2imgactions.appendChild(txt2imgnegprompt);
        txt2imgtoprowparent.appendChild(txt2imgpresetmanager);

        //img2img
        var img2imgtoprow = document.getElementById("img2img_toprow");
        var img2imgtoprowparent = img2imgtoprow.parentElement;
        var img2imgresultspanel = document.getElementById("img2img_results");
        var img2imgsettingspanel = document.getElementById("img2img_settings");
        var img2imggeneratebox = document.getElementById("img2img_generate_box");
        var img2imgbottomhalf = img2imgresultspanel.parentElement;
        var img2imggallerycontainer = document.getElementById("img2img_gallery_container");
        var img2imggallerybuttons = document.getElementById("image_buttons_img2img");
        var img2imggallerybuttonscontainer = img2imggallerybuttons.parentElement;
        var img2imgpresetmanager = document.getElementById("img2img_preset_manager_accordion");
        var img2imgactions = document.getElementById("img2img_actions_column");
        var img2imgtools = document.getElementById("img2img_tools");
        var img2imgstylesrow = document.getElementById("img2img_styles_row");
        var img2imghtmlinfo = document.getElementById("html_info_img2img");
        var img2imgpromptdetails = img2imghtmlinfo.parentElement;
        var img2imgpromptcontainer = document.getElementById("img2img_prompt_container");
        var img2imgprompt = img2imgpromptcontainer.children[0];
        var img2imgnegprompt = img2imgpromptcontainer.children[1];
        var img2imgdeepbooru = document.getElementById("deepbooru");
        var img2imginterrogate = document.getElementById("interrogate");
        var img2imginterrogatecol = img2imginterrogate.parentElement;

        img2imgbottomhalf.appendChild(img2imgsettingspanel);

        img2imgresultspanel.appendChild(img2imgstylesrow);
        img2imgresultspanel.appendChild(img2imgtools);
        img2imgresultspanel.appendChild(img2imggeneratebox);
        img2imgresultspanel.appendChild(img2imggallerycontainer);
        img2imgresultspanel.appendChild(img2imggallerybuttons);
        img2imgresultspanel.appendChild(img2imgpromptdetails);

        img2imgactions.appendChild(img2imgnegprompt);
        img2imgtoprowparent.appendChild(img2imgpresetmanager);
        img2imgtoprow.appendChild(img2imginterrogate);
        img2imgtoprow.appendChild(img2imgdeepbooru);
        img2imgtoprow.appendChild(img2imgpromptcontainer);
        img2imgtoprow.appendChild(img2imgactions);

        img2imgtoprowparent.appendChild(img2imginterrogatecol);
    }
}

onUiTabChange(() => {
    if (!rearranged) {
        PageRearranger.rearrangePage();
        rearranged = true;
    }
});