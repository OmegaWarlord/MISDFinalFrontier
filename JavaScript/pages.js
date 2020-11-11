// Last Updated Beta 2.0.0 build 0211
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

$(document).ready(function(){
    $("#searchButton").click(function() {
        var val1 = $("#searchInfo").val();
        console.log(val1);
    })
    $('#homeButton').click(function () {
        $("meta[name='name']").attr('content', 'home');
        var page1 = $("meta[name='name']").attr('content');
        $('title').text('The Final Frontier | Home');
        thing(page1);
    })
    $('#newsButton').click(function() {
        $("meta[name='name']").attr('content', 'newsLetters');
        var page1 = $("meta[name='name']").attr('content');
        $('title').text('The Final Frontier | News');
        thing(page1);
    })
    $('#articleButton').click(function() {
        $("meta[name='name']").attr('content', 'articles');
        var page1 = $("meta[name='name']").attr('content');
        $('title').text('The Final Frontier | Articles');
        thing(page1);
    })
    $('#videoButton').click(function() {
        $("meta[name='name']").attr('content', 'videos');
        var page1 = $("meta[name='name']").attr('content');
        $('title').text('The Final Frontier | Videos');
        thing(page1);  
    })
    $('#podcastButton').click(function() {
        $("meta[name='name']").attr('content', 'podcasts');
        var page1 = $("meta[name='name']").attr('content');
        $('title').text('The Final Frontier | Podcasts');
        thing(page1);  
    })
    $('#blogButton').click(function() {
        $("meta[name='name']").attr('content', 'blogs');
        var page1 = $("meta[name='name']").attr('content');
        $('title').text('The Final Frontier | Blogs');
        thing(page1);  
    })
});

thing(page);
function thing(page) {  
    console.log('work');
    switch(page) {
        case 'home':{
            var target = document.getElementById('Pmain');
            var converter = new showdown.Converter();
            var html = converter.makeHtml('<pre>Hello, this page is not formatted yet</pre>');
            target.innerHTML = html;
            break;
        }
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
                    var content = newsArray[i].get('content');
                    var target = document.getElementById('Pmain');
                    var converter = new showdown.Converter();
                    var html = converter.makeHtml(content);
                    target.innerHTML = html;
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
                    var content = articlesArray[i].get('content');
                    var target = document.getElementById('Pmain');
                    var converter = new showdown.Converter();
                    var html = converter.makeHtml(content);
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
                    var content = videoArray[i].get('content');
                    var target = document.getElementById('Pmain');
                    var converter = new showdown.Converter();
                    var html = converter.makeHtml(content);
                    target.innerHTML = html;
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
                    var content = podcastArray[i].get('content');
                    var target = document.getElementById('Pmain');
                    var converter = new showdown.Converter();
                    var html = converter.makeHtml(content);
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
                    var content = blogsArray[i].get('content');
                    var target = document.getElementById('Pmain');
                    var converter = new showdown.Converter();
                    var html = converter.makeHtml(content);
                    target.innerHTML = html;
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
}
