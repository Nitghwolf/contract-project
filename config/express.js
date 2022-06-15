const express = require('express');
// const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const reactSsrMiddleware = require('../middlewares/reactSsr');
const logger = require('morgan');
const reactSsrError = require('../middlewares/reactSsrError');
// const staticMiddleware = require('../middlewares/static');

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'G(8x>|Ai^"+&', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
    // path: '/count'
  },
};

function expressConfig(app) {
  // миддлварки (middlewares, промежуточные фукнции):
  app.use(logger('dev'));
  // позволяет запрашивать статический контент
  // (файлы, которые лежат в / public) с нашего сервера
  app.use(express.static(`${__dirname}/../public`));
  // app.use(staticMiddleware);

  // при отправке формы методом POST данные из формы приходят
  // не сервер в зашифрованном виде
  // эта миддлварка расшифровывает их и кладёт в req.body
  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  // app.use(cookieParser());

  app.use(session(sessionConfig));

  app.use(reactSsrMiddleware);
  app.use(reactSsrError);
}

module.exports = expressConfig;
