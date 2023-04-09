import { renderGallerey } from './gallery.js';
import { getPictures } from './data.js';
const pictures = getPictures;

renderGallerey(pictures());

