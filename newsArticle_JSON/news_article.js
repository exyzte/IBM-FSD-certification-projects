var xhr = new XMLHttpRequest();
var url = './news_articles.json';
xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;
        description.style.fontWeight = 'bold';

        var source = document.createElement('p');
        source.textContent = article.source;
        source.style.fontStyle = 'italic';

        var image = document.createElement('img');
        image.src = article.image_url;
        image.alt = article.title;
        image.style.width = '100px';
        image.style.height = '100px';

        var publicationDate = document.createElement('p');
        publicationDate.textContent = article.publication_date;
        publicationDate.style.fontStyle = 'italic';

        var content = document.createElement('p');
        content.textContent = article.content;

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(source);
        articleDiv.appendChild(image);
        articleDiv.appendChild(publicationDate);
        articleDiv.appendChild(content);

        articlesDiv.appendChild(articleDiv);
    });

};

xhr.send();