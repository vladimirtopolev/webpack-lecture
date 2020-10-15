import {createElement, createImage} from './components/createElement';

// 01 CSS files
// you can import in js files css-files, but you need to include
// special loader which knows how to handle them (styles-loader, css-loader)
import './css/styles.css';


document.body.appendChild(createElement(`Webpack lives.`));

// 02 Image files
// you can include any image resource, but you also need to include
// special loader (file-loader)
import image from './images/icon.png';
document.body.appendChild(createImage(image));