module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [{
      user_id: 1,
      tea_id: 1,
      content: 'Хороший чай',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_id: 1,
      tea_id: 2,
      content: 'Чай не вкусный',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 2,
      tea_id: 1,
      content: 'Дорого-богато',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
  },
};
