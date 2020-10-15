export const createElement = message => {
    const element = document.createElement("div");
    element.innerHTML = message;
    return element;
};