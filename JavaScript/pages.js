// Last Updated Beta 1.0.0 build 0119
var config = {
    apiKey: "AIzaSyBnL3LPUijw8GQ53Ix-vqSKjNaNBnb4UwE",
    authDomain: "journaism2.firebaseapp.com",
    databaseURL: "https://journaism2.firebaseio.com",
    projectId: "journaism2",
    storageBucket: "gs://journaism2.appspot.com",
    messagingSenderId: "403851583212",
    appId: "1:403851583212:web:99b3efee0cb322673c8fc9",
    measurementId: "G-Z2Z22QWQZ3"
}



var app = firebase.initializeApp(config);
const db = app.firestore();

var page = $("meta[name='name']").attr('content');

switch(page) {
    case 'latest':{
        break;
    }
    case 'newsLetters':{
        db.collection('newsLetters').get().then(querySnapshot => {
            let i = 0;
            var newsArray = new Array();
            querySnapshot.forEach(doc => {
                newsArray.push(doc);
            })
            newsArray.sort(function(x, y) {
                return y.get('date') - x.get('date');
            })
            function reload() {  
                
                $("#headerTitle").text(newsArray[i].get('title'));
                var text = newsArray[i].get('text');
                var target = document.getElementById('main');
                var converter = new showdown.Converter();
                var html = converter.makeHtml(text);
                target.innerHTML = html;
                $("#author").text(newsArray[i].get('author'));
            }
            reload();
            $('#nextButton').click(function(){
                if(i < (newsArray.length-1)){
                    i++;
                    reload();
                }
            })
            $('#prevButton').click(function(){
                if(i > 0){
                    i--;
                    reload();
                }
            })
        })
        break;
    }
    case 'articles':{
        db.collection('articles').get().then(querySnapshot => {
            let i = 0;
            var articlesArray = new Array();
            querySnapshot.forEach(doc => {
                articlesArray.push(doc);
            })
            articlesArray.sort(function(x, y) {
                return y.get('date') - x.get('date');
            })
            function reload() {  
                
                $("#headerTitle").text(articlesArray[i].get('title'));
                $("#author").text(articlesArray[i].get('author'));
                var text = articlesArray[i].get('text');
                var target = document.getElementById('main');
                var converter = new showdown.Converter();
                var html = converter.makeHtml(text);
                target.innerHTML = html;
                
            }
            reload();
            $('#nextButton').click(function(){
                if(i < (articlesArray.length-1)){
                    i++;
                    reload();
                }
            })
            $('#prevButton').click(function(){
                if(i > 0){
                    i--;
                    reload();
                }
            })
        })
        break;
    }
    case 'videos':{
        db.collection('videos').get().then(querySnapshot => {
            let i = 0;
            var videoArray = new Array();
            querySnapshot.forEach(doc => {
                videoArray.push(doc);
            })
            videoArray.sort(function(x, y) {
                return y.get('date') - x.get('date');
            })
            function reload() {
                $("#headerTitle").text(videoArray[i].get('title'));
                $("#vMain").attr("src", videoArray[i].get('link'));
                var text = videoArray[i].get('description');
                var target = document.getElementById('main');
                var converter = new showdown.Converter();
                var html = converter.makeHtml(text);
                target.innerHTML = html;
                $("#author").text(videoArray[i].get('author'));
            }
            reload();
            $('#nextButton').click(function(){
                if(i < (videoArray.length-1)){
                    i++;
                    reload();
                }
            })
            $('#prevButton').click(function(){
                if(i > 0){
                    i--;
                    reload();
                }
            })
        })
        break;
    }
    case 'podcasts':{
        db.collection('podcasts').get().then(querySnapshot => {
            let i = 0;
            var podcastArray = new Array();
            querySnapshot.forEach(doc => {
                podcastArray.push(doc);
            })
            podcastArray.sort(function(x, y) {
                return y.get('date') - x.get('date');
            })
            function reload() {
                $("#headerTitle").text(podcastArray[i].get('title'));
                $("#vMain").attr('src', podcastArray[i].get('link'));
                $("#author").text(podcastArray[i].get('author'));
                $("#speaker").text(podcastArray[i].get('speaker'));
                var text = podcastArray[i].get('text');
                var target = document.getElementById('main');
                var converter = new showdown.Converter();
                var html = converter.makeHtml(text);
                target.innerHTML = html;
            }
            reload();
            $('#nextButton').click(function(){
                if(i < (podcastArray.length-1)){
                    i++;
                    reload();
                }
            })
            $('#prevButton').click(function(){
                if(i > 0){
                    i--;
                    reload();
                }
            })
        })
        break;
    }
    case 'blogs':{
        db.collection('blogs').get().then(querySnapshot => {
            let i = 0;
            var blogsArray = new Array();
            querySnapshot.forEach(doc => {
                blogsArray.push(doc);
            })
            function reload() {  
                $("#headerTitle").text(blogsArray[i].get('title'));
                $("#main").text(blogsArray[i].get('text'));
                var text = blogsArray[i].get('text');
                var target = document.getElementById('main');
                var converter = new showdown.Converter();
                var html = converter.makeHtml(text);
                target.innerHTML = html;
                $("#author").text(blogsArray[i].get('author'));
            }
            blogsArray.sort(function(x, y) {
                return y.get('date') - x.get('date');
            })
            reload();
            $('#nextButton').click(function(){
                if(i < (blogsArray.length-1)){
                    i++;
                    reload();
                }
            })
            $('#prevButton').click(function(){
                if(i > 0){
                    i--;
                    reload();
                }
            })
        })
        break;
    }
}