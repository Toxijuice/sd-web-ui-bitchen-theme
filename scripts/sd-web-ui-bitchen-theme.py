from pathlib import Path

import logging

import gradio as gr
from modules import script_callbacks
from modules import shared, scripts
from modules.shared import opts

import modules.scripts as scripts

# base_dir = Path(scripts.basedir())

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)

is_debug = getattr(opts, "is_debug", False)
if is_debug: logger.setLevel(logging.DEBUG)

def log(msg, level=logging.INFO):
    if  (level == logging.CRITICAL): logger.critical(msg)
    elif(level == logging.FATAL):    logger.fatal(msg)
    elif(level == logging.ERROR):    logger.error(msg)
    elif(level == logging.WARNING):  logger.warning(msg)
    elif(level == logging.WARN):     logger.warn(msg)
    elif(level == logging.INFO):     logger.info(msg)
    elif(level == logging.DEBUG):    logger.debug(msg)
    elif(level == logging.NOTSET):   logger.log(msg)

    if(logger.level >= level): print((f"[{__name__}] {msg}"))

def on_ui_settings():
    section = "bitchentheme", "Bitchen Theme"

    shared.opts.add_option(
        key="bitchen_base_hue",
        info=shared.OptionInfo(
            0.95,
            label="Base Hue (Has no effect when Color Cycle is active)",
            component=gr.Slider,
            component_args={"minimum": -1, "maximum": 1, "step": 0.00025},
            section=section,
        ),
    )

    shared.opts.add_option(
        key="bitchen_dist_hue",
        info=shared.OptionInfo(
            -0.15,
            label="Hue Difference",
            component=gr.Slider,
            component_args={"minimum": -1, "maximum": 1, "step": 0.00025},
            section=section,
        ),
    )

    shared.opts.add_option(
        key="bitchen_color_cycle",
        info=shared.OptionInfo(
            False,
            label="Color Cycle",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="bitchen_color_cycle_speed",
        info=shared.OptionInfo(
            1.00,
            label="Color Cycle Speed",
            component=gr.Slider,
            component_args={"minimum": 0.1, "maximum": 15, "step": 0.00025},
            section=section,
        ),
    )

    shared.opts.add_option(
        key="bitchen_color_cycle_framerate",
        info=shared.OptionInfo(
            12,
            label="Color Cycle Update Rate (Frames Per Second)",
            component=gr.Slider,
            component_args={"minimum": 1, "maximum": 300, "step": 1},
            section=section,
        ),
    )

    shared.opts.add_option(
        key="bitchen_txt2img_rearrange",
        info=shared.OptionInfo(
            True,
            label="Use Alternate txt2img layout (Requires Reload) !!Layout partially broken when disabled!!",
            section=section,
        ),
    )

    shared.opts.add_option(
        key="bitchen_img2img_rearrange",
        info=shared.OptionInfo(
            True,
            label="Use Alternate img2img layout (Requires Reload) !!Layout partially broken when disabled!!",
            section=section,
        ),
    )
    
script_callbacks.on_ui_settings(on_ui_settings)