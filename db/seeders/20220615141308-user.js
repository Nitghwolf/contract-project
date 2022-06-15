module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      user_name: 'admin',
      admin: true,
      password: 'admin',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      user_name: 'Vasya',
      admin: false,
      password: '1234',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
  },
};
