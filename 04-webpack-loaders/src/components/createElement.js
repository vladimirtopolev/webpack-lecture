export const createElement = message => {
    const element = document.createElement("div");
    element.innerHTML = message;
    return element;
};

export const createImage = imageSrc => {
    const image = document.createElement('img');
    console.log(imageSrc);
    image.src = imageSrc;
    return image;
}