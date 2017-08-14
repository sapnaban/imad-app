var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var article1 = {
    title:  'Article One | Sriram Anantha Padmanaban',
    heading: 'Article One',
    date: `<p id="demo"></p>
        <script>
            document.getElementById("demo").innerHTML = Date();
        </script>`,
    Content:`<p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.  
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.  
            </p>
            <p>
                This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article. This is the content for my first article.  
            </p>`
};

function createtemplate(data){
    var title = data.title;
    var date = data.data;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
        <!Doctype html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="view port" content="width=device-width, intial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet">
        </head>
        <body>
            <div class="container">
                <div>
                    <a href = "/"> Home</a>
                </div>
                <hr />
                <h3> 
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${Content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req,res){
   res.send(createtemplate(article1));
});

app.get('/article-two', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));    
});

app.get('/article-three', function(req,res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
