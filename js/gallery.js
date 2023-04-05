import { generationThumbnails } from './rendering.js';
import { showBigPicture } from './big-picture.js';

const conteiner = document.querySelector('.pictures');

const renderGallerey = (pictures) => {
  conteiner.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-id]');
    if (!thumbnail) {
      return;
    }
    const picture = pictures.find(
      (item) => item.id === +thumbnail.dataset.thumbnailId
    );
    showBigPicture(picture);
  });

  generationThumbnails(pictures, conteiner);
};
export { renderGallerey };
