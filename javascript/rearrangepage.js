"use strict";

// If anyone knows how to rearrange the panels better
// please let me know. This seems really bad.
var bitchenTabsRearranged = false;

class PageRearranger {
    
    static rearrangePage() {
        function safereparent(parent, child) {
            if (parent !== null && child !== null) {
                parent.appendChild(child);
            } else {
                if (parent === null) {
                    console.error("Can't append child, parent is null.");
                }
                if (child === null) {
                    console.error("Can't append child, child is null.");
                }
            }
        }

        function safeinsertchild(parent, child) {
            if (parent !== null && child !== null) {
                parent.insertBefore(child, parent.firstChild);
            } else {
                if (parent === null) {
                    console.error("Can't append child, parent is null.");
                }
                if (child === null) {
                    console.error("Can't append child, child is null.");
                }
            }
        }


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
        var txt2imgdownloadpanel = document.getElementById("download_files_txt2img");
        var txt2imgpresetmanager = document.getElementById("txt2img_preset_manager_accordion");
        var txt2imgactions = document.getElementById("txt2img_actions_column");
        var txt2imgtools = document.getElementById("txt2img_tools");
        var txt2imgtoolsinner = txt2imgtools.children[0];
        var txt2imgstylesrow = document.getElementById("txt2img_styles_row");
        var txt2imgstylesrefresh = txt2imgstylesrow.children[0].children[1];
        var txt2imgstylespanel = document.getElementById("txt2img_styles");
        var txt2imgstyleslabel = txt2imgstylespanel.children[1];
        var txt2imgstyleslabelinnerwrap = txt2imgstyleslabel.children[1].children[0];
        var txt2imghtmlinfo = document.getElementById("html_info_txt2img");
        var txt2imgpromptdetails = txt2imghtmlinfo.parentElement;
        var txt2imgpromptcontainer = document.getElementById("txt2img_prompt_container");
        var txt2imgprompt = txt2imgpromptcontainer.children[0];
        var txt2imgnegprompt = txt2imgpromptcontainer.children[1];

        safereparent(txt2imgbottomhalf, txt2imgsettingspanel);

        safereparent(txt2imgstylespanel, txt2imgstylesrefresh);
        safereparent(txt2imgstylespanel, txt2imgstyleslabel);

        safereparent(txt2imgstyleslabelinnerwrap, txt2imgtoolsinner);

        safereparent(txt2imgresultspanel, txt2imgstylesrow);
        safereparent(txt2imgresultspanel, txt2imggeneratebox);
        safereparent(txt2imgresultspanel, txt2imggallerycontainer);
        safereparent(txt2imgresultspanel, txt2imggallerybuttons);
        safereparent(txt2imgresultspanel, txt2imgdownloadpanel);
        safereparent(txt2imgresultspanel, txt2imgpromptdetails);
        safereparent(txt2imgresultspanel, txt2imgpresetmanager);

        safereparent(txt2imgpromptcontainer, txt2imgnegprompt);

        safereparent(txt2imgtoprowparent, txt2imgactions);

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
        var img2imgdownloadpanel = document.getElementById("download_files_img2img");
        var img2imgpresetmanager = document.getElementById("img2img_preset_manager_accordion");
        var img2imgactions = document.getElementById("img2img_actions_column");
        var img2imgtools = document.getElementById("img2img_tools");
        var img2imgtoolsinner = img2imgtools.children[0];
        var img2imgstylesrow = document.getElementById("img2img_styles_row");
        var img2imgstylesrefresh = img2imgstylesrow.children[0].children[1];
        var img2imgstylespanel = document.getElementById("img2img_styles");
        var img2imgstyleslabel = img2imgstylespanel.children[1];
        var img2imgstyleslabelinnerwrap = img2imgstyleslabel.children[1].children[0];
        var img2imghtmlinfo = document.getElementById("html_info_img2img");
        var img2imgpromptdetails = img2imghtmlinfo.parentElement;
        var img2imgpromptcontainer = document.getElementById("img2img_prompt_container");
        var img2imgprompt = img2imgpromptcontainer.children[0];
        var img2imgnegprompt = img2imgpromptcontainer.children[1];
        var img2imgdeepbooru = document.getElementById("deepbooru");
        var img2imginterrogate = document.getElementById("interrogate");
        var img2imginterrogatecol = img2imginterrogate.parentElement;
        
        safereparent(img2imgbottomhalf, img2imgsettingspanel);
        
        safereparent(img2imgstylespanel, img2imgstylesrefresh);
        safereparent(img2imgstylespanel, img2imgstyleslabel);

        safereparent(img2imgstyleslabelinnerwrap, img2imgtoolsinner);

        safereparent(img2imgresultspanel, img2imgstylesrow);
        safereparent(img2imgresultspanel, img2imggeneratebox);
        safereparent(img2imgresultspanel, img2imggallerycontainer);
        safereparent(img2imgresultspanel, img2imggallerybuttons);
        safereparent(img2imgresultspanel, img2imgdownloadpanel);
        safereparent(img2imgresultspanel, img2imgpromptdetails);
        safereparent(img2imgresultspanel, img2imgpresetmanager);

        
        safereparent(img2imgpromptcontainer, img2imgprompt);
        safereparent(img2imgpromptcontainer, img2imgnegprompt);

        safereparent(img2imgtoprow, img2imgpromptcontainer);
        
        safereparent(img2imgtoprowparent, img2imgactions);

        safeinsertchild(img2imgsettingspanel, img2imginterrogatecol);
    }
}

onUiTabChange(() => {
    if (!bitchenTabsRearranged) {
        PageRearranger.rearrangePage();
        bitchenTabsRearranged = true;
    }
});