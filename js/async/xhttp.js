console.log('js loaded');
const log = document.querySelector('.event-log');
const xhttp = document.querySelector('#xhr');

xhttp.addEventListener('click' , ()=>{
    console.log('Button clicked!');
    log.textContent = '';
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('loadend', ()=>{
        log.textContent = log.textContent + 'Finished with status code: '+ xhr.status;
    });

    xhr.open(
        "GET",
        "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
      );
    xhr.send();
    log.textContent = log.textContent + 'Started xhr request\n';
});

document.querySelector('#reload').addEventListener('click' , ()=>{
    log.textContent = "";
    document.location.reload();
});