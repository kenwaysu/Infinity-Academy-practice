const { faker } = require('@faker-js/faker');
const articles = []

for (let i = 0; i<20; i++){
    articles.push({
        title: faker.lorem.sentence(),
        subTitle: faker.lorem.sentences(),
        date: faker.date.past().toString(),
        content: faker.lorem.paragraph(),
        url: `/articles/${i}`,
    })
}

module.exports = articles