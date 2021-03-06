var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
var articles = {
        'article-one' : {
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
        },
        'article-two' : {
            title:  'Article Two | Sriram Anantha Padmanaban',
            heading: 'Article Two',
            date: `<p id="demo"></p>
                <script>
                    document.getElementById("demo").innerHTML = Date();
                </script>`,
            Content:`<p>
                        This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.
                    </p>
                    <p>
                        This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.  
                    </p>
                    <p>
                        This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article.This is the content for my second article. 
                    </p>`
            
        },
        'article-three' : {
            title:  'Article Three | Sriram Anantha Padmanaban',
            heading: 'Article Three',
            date: `<p id="demo"></p>
                <script>
                    document.getElementById("demo").innerHTML = Date();
                </script>`,
            Content:`<p>
                        This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.  
                    </p>
                    <p>
                        This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.  
                    </p>
                    <p>
                        This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article. This is the content for my third article.  
                    </p>`
        }
};

function createtemplate(data){
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var Content = data.Content;
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

var vcounter = 0;
    app.get('/counter', function(req,res){
        vcounter = vcounter + 1;
        res.send(vcounter.toString());
});

app.get('/:articleName', function(req,res){
var articleName = req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
