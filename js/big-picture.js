const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideBigPicture();
  }
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  commentList.innerHTML = '';
};

const onCancelButtonClick = () => {
  hideBigPicture();
};

const createComment = ({ avatar, name, message }) => {
  const coment = commentItem.cloneNode(true);
  coment.querySelector('.social__picture').src = avatar;
  coment.querySelector('.social__picture').alt = name;
  coment.querySelector('.social__text').textContent = message;

  return coment;
};

const renderComments = (comments) => {
  const fragment = document.createDocumentFragment();
  comments.forEach((commentElement) => {
    fragment.append(createComment(commentElement));
  });

  commentList.append(fragment);
};

const renderPictureDetails = ({ description, likes, url, text }) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = text;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderPictureDetails(data);
  commentList.innerHTML = '';
  renderComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };

