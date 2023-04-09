import { renderGallerey } from './gallery.js';
import { getPictures } from './data.js';
import { showModal } from './form.js';
const pictures = getPictures;

renderGallerey(pictures(showModal));

