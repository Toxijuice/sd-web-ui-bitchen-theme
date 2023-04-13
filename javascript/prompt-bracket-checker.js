"use strict";
class BracketChecker {
    textArea;
    counterElt;
    errorStrings;
    constructor(textArea, counterElt) {
        this.textArea = textArea;
        this.counterElt = counterElt;
        this.errorStrings = [
            {
                regex: '\\(',
                error: '(...) - Different number of opening and closing parentheses detected.\n',
            },
            {
                regex: '\\[',
                error: '[...] - Different number of opening and closing square brackets detected.\n',
            },
            {
                regex: '\\{',
                error: '{...} - Different number of opening and closing curly brackets detected.\n',
            },
        ];
    }
    /**
     * 检查文本框中的括号是否匹配，并更新计数器元素的标题和样式
     */
    check = () => {
        let title = '';
        this.errorStrings.forEach(({ regex, error }) => {
            const openMatches = (this.textArea.value.match(new RegExp(regex, 'g')) || []).length;
            const closeMatches = (this.textArea.value.match(new RegExp(regex.replace(/\(/g, ')').replace(/\[/g, ']').replace(/\{/g, '}'), 'g')) ||
                []).length;
            if (openMatches !== closeMatches) {
                if (!this.counterElt.title.includes(error)) {
                    title += error;
                }
            }
            else {
                title = this.counterElt.title.replace(error, '');
            }
        });
        this.counterElt.title = title;
        this.counterElt.classList.toggle('error', !!title);
    };
}
/**
 * 初始化括号匹配检查器
 * @param id_prompt 包含文本框的元素的 ID
 * @param id_counter 显示计数器的元素的 ID
 */
function setupBracketChecking(idPrompt, idCounter) {
    const textarea = gradioApp().querySelector(`#${idPrompt} > label > textarea`);
    const counter = gradioApp().getElementById(idCounter);
    const bracketChecker = new BracketChecker(textarea, counter);
    textarea.addEventListener('input', bracketChecker.check);
}
const shadowRootLoaded = setInterval(() => {
    const shadowRoot = document.querySelector('gradio-app')?.shadowRoot;
    if (!shadowRoot)
        return;
    const shadowTextArea = shadowRoot.querySelector(`#txt2img_prompt > label > textarea`);
    if (!shadowTextArea)
        return;
    clearInterval(shadowRootLoaded);
    ['txt2img', 'txt2img_neg', 'img2img', 'img2img_neg'].forEach((prompt) => {
        setupBracketChecking(`${prompt}_prompt`, `${prompt}_token_counter`);
        setupBracketChecking(`${prompt}_prompt`, `${prompt}_negative_token_counter`);
    });
}, 1000);