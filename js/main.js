import { generationThumbnails } from './rendering.js';
import { getPictures } from './data.js';
const pictures = getPictures;

generationThumbnails(pictures());


