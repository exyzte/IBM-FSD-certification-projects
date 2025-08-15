var xhr = new XMLHttpRequest();
var url = './healthArticlePracticeRepetition.json';
xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = () => {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to achieve';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(way => {
                var listItem = document.createElement('li');
                listItem.texContent = way;
                waysList.appendChild(listItem);
            });
            
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var benefitItem = document.createElement('li');
                benefitItem.textContent = benefit;
                benefitsList.appendChild(benefitItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);

            });

    }

    xhr.send();
