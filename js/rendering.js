const renderingTamplate = document
  .querySelector('#picture')
  .content.querySelector('.picture');
const conteiner = document.querySelector('.pictures');

const createThumbnail = ({ comments, description, likes, url, id }) => {
  const thumbnail = renderingTamplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const generationThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });

  conteiner.append(fragment);
};

export { generationThumbnails };
