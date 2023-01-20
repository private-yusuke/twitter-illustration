export default {
  async up(queryInterface, Sequelize) {
    return await queryInterface.createTable(
      "TweetCharacters",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        tweetId: {
          allowNull: false,
          references: { model: "Tweets", key: "id" },
          type: Sequelize.STRING,
        },
        character: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        uniqueKeys: {
          tweetCharacterKey: {
            fields: ["tweetId", "character"],
          },
        },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable("TweetCharacters");
  },
};
