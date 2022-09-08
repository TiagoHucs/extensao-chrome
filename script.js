document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('#submitBtn').addEventListener('click',function(){

        chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
            let url = tabs[0].url;
            window.alert(url);
            let txt = tabs[0].querySelector('#input').value;
            window.alert('texto: '+ txt);
            // use `url` here inside the callback because it's asynchronous!
        });

        /*
        document.getElementById('btsend').onclick = () => {
            chrome.tabs.executeScript({file: 'content.js'});
        };*/

        window.alert('ola mundo');
        //let txt = getValue()

    })

    function getValue(){
        return document.querySelector('#inputText').value;
    }

    function upper(text){
        return text.toUpperCase();
    }

    function showResult(){
        document.querySelector('#result').innerHTML = upper(txt);
    }
})