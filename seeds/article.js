const { faker } = require('@faker-js/faker');
const articles = []

for (let i = 0; i<20; i++){
    articles.push({
        id: i,
        title: faker.lorem.sentence(),
        subTitle: faker.lorem.sentences(),
        createDate: faker.date.past().toString(),
        content: faker.lorem.paragraph(),
        publish: true,
        url: `/articles/${i}`,
    })
}

module.exports = articles