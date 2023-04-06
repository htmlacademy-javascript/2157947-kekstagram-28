const COMMENT_PER_PORTION = 5;

const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

let comentsShown = 0;
const coments = [];

const createComment = ({ avatar, name, message }) => {
  const coment = commentItem.cloneNode(true);
  coment.querySelector('.social__picture').src = avatar;
  coment.querySelector('.social__picture').alt = name;
  coment.querySelector('.social__text').textContent = message;

  return coment;
};

const renderComments = (comments) => {
  comentsShown += COMMENT_PER_PORTION;
  if (comentsShown >= coments.length) {
    commentsLoader.classList.add('hidden');
    comentsShown = coments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < comentsShown; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  comments.forEach((commentElement) => {
    fragment.append(createComment(commentElement));
  });
  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = `${comentsShown} из <span class="comments-count" ${coments.lenght} </span> комментариев`;
};

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
  comentsShown = 0;
};

const onCancelButtonClick = () => {
  hideBigPicture();
};
const onCommentsLoaderClick = () => { renderComments(coments.slice(comentsShown, comentsShown + COMMENT_PER_PORTION));
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
commentsLoader.addEventListener('click', onCommentsLoaderClick);
export { showBigPicture };
