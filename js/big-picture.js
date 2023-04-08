const COMMENT_PER_PORTION = 5;

const bigPicture = document.querySelector('.big-picture');
const commentList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelButton = document.querySelector('.big-picture__cancel');

let commentsArray = [];

const createComment = (commentsData) => {
  commentsData.forEach(({ avatar, name, message }) => {
    const comment = commentItem.cloneNode(true);
    comment.querySelector('.social__picture').src = avatar;
    comment.querySelector('.social__picture').alt = name;
    comment.querySelector('.social__text').textContent = message;

    commentList.append(comment);
  });
};

const showComments = (comments) => {
  const showCommentss = comments.slice(0, COMMENT_PER_PORTION);

  createComment(showCommentss);
  commentCount.textContent = `${showCommentss.length} из ${comments.length} комментариев`;

  if (showComments.length >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
};
const loadComments = () => {
  const additionalComments = commentsArray.slice(commentList.children.length, commentList.children.length + COMMENT_PER_PORTION);
  createComment(additionalComments);

  commentCount.textContent =
    `${commentList.children.length} из ${commentsArray.length} комментариев`;

  if (commentsArray.length <= commentList.children.length) {
    commentsLoader.classList.add('hidden');
  }
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCancelButtonClick();
  }
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onCancelButtonClick = () => {
  hideBigPicture();
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', loadComments);
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
  document.addEventListener('keydown', onDocumentKeydown);
  renderPictureDetails(data);
  commentList.innerHTML = '';
  commentsArray = data.comments;
  commentsLoader.addEventListener('click', loadComments);
  showComments(data.comments);
};

cancelButton.addEventListener('click', onCancelButtonClick);

export { showBigPicture };
