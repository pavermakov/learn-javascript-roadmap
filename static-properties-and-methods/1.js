// Счетчик объектов

function Article() {
  this.created = new Date();

  Article.count +=1;
  Article.latest = this.created;
}

Article.count = 0;

Article.showStats = function() {
  return 'Всего: ' + Article.count + ', Последняя: (' + Article.latest + ')';
};

new Article();
new Article();

console.log(Article.showStats());

new Article();

console.log(Article.showStats());