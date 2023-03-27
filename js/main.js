const PICTUARE_PHOTO = 25;
const AVATAR_PHOTO = 6;
const LIKE_MIN_PHOTO = 15;
const LIKE_MAX_PHOTO = 200;
const COMMENT_PHOTO = 20;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Мне нравится и улыбаюсь!',
  'Пять минут полет нормальный',
  'И снова Здравствуйте!',
  'Солнце, Море, Песок',
  'Отдых',
  'Прогулка под луной',
  'Вечерний релакс',
  'Уютный вечер',
  'Просто фото',
  'Доброе утро',
  'Милый и пушистый',
  'Наконец-то отпуск',
  'А вот и Солнышко',
  'Оздоровительная прогулка',
  'Спорт как смысл жизни',
  'Мечты сбываются',
  'Долгожданная встреча',
  'Маленькие радости',
  'Оживший сад',
  'Летний дождь',
  'Природа',
  'Закат',
  'Белый Мишка',
  'Куда приводят мечты',
  'Ничего не бойся'
];
const NAMES = ['Ирина', 'Иван', 'Светлана', 'Михаил', 'Захар', 'Варвара'];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMassage = () =>
  Array.from({ length: getRandomInteger(1, 2) }, () => getRandomArrayElement(COMMENT_LINES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_PHOTO)}.svg`,
  message: createMassage(),
  name: getRandomArrayElement(NAMES),
});
const createPicture = (index)=> ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_PHOTO, LIKE_MAX_PHOTO),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_PHOTO) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({ length: PICTUARE_PHOTO }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );
getPictures();
