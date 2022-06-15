module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Teas', [{
      name_tea: 'Шу пуэр',
      variety: 'Лао Бан Чжан (Юньнань Менхай)',
      img: 'https://i.siteapi.org/lKhYUhjLwpVvU6X1G-Nhet3UGb4=/fit-in/330x/top/filters:format(webp)/6350f025f336707.ru.s.siteapi.org/img/t82b0me6628oww8w08swosc4co84o8',
      description: 'Отличный, мощный Шу пуэр, изготовленный из сырья высокого качества!',
      origin_country: 'Китай',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name_tea: 'Лун Цзин (Колодец Дракона)',
      variety: 'Зелёный чай',
      img: 'https://i.siteapi.org/ek82UqSjUUOdSAR2JdTSveGCTBw=/fit-in/330x/top/filters:format(webp)/6350f025f336707.ru.s.siteapi.org/img/cecc34058afc41eedb22b2f98f6aa1f8e3d93d86.JPG',
      description: 'Один из самых популярных чаев в Китае. Для его изготовления используется только чайная почка и первые два листа. Oбжаривается в специальнoм котле – вoке, с дoбавлением чайного масла. Этот чай обладает приятным вкусом и нежным ароматом. Настой - прозрачный, светло-зелёный. Лун Цзин заваривают методом пролива в гайвани или чайнике Гунфу, 80-85°С.',
      origin_country: 'Китай',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name_tea: 'Йерба Мате La Hoja',
      variety: 'Мате',
      img: 'https://i.siteapi.org/J1gbmZ667-ap-5SKObeWShssF2o=/fit-in/330x/top/filters:format(webp)/s.siteapi.org/6350f025f336707.ru/img/rtvwnioavysocggo400gcg0kckcws0',
      description: 'Матэ пьют из калебаса, ( маленькая высушенная тыква-горлянка) через металлическую трубочку (бомбилью). Это напиток приготовленный из высушенных листьев и стеблей вечнозеленого кустарника падуба парагвайского, в нём содержится порядка 196 микроэлементов и витаминов.',
      origin_country: 'Парагвай',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name_tea: 'Индийский чёрный чай "Ассам Хармутти"',
      variety: 'Черный чай',
      img: 'https://i.siteapi.org/wjaakoOCDlcpYLu-IOzDBtjhIes=/fit-in/330x/top/filters:format(webp)/s.siteapi.org/6350f025f336707.ru/img/f54g5mo33cgscgg0koc4okgk0ks0k0',
      description: 'Классический чёрный чай с северо-востока Индии. Собирается на знаменитой в Ассаме плантации, известной качеством обработки чайного листа. Для изготовления этого чая собирают 2 верхних листочка чайного куста. Чай получается крепким, с ярким ароматом, красно-янтарного цвета.Заваривают водой 90-95 градусов, 5 гр. на чайник 450 мл. или в чайнике гунфу.',
      origin_country: 'Индия',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
