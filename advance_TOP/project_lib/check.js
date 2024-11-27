let form = document.querySelector('form');
form.addEventListener("click",(e)=>{
    let title = form.querySelector("#title");
    let author = form.querySelector("#author");
    let pages = form.querySelector("#pages");
    title.setCustomValidity("");
    author.setCustomValidity("");
    pages.setCustomValidity("");
});
form.addEventListener("input",(e)=>{
    let title = form.querySelector("#title");
    let author = form.querySelector("#author");
    let pages = form.querySelector("#pages");
    title.setCustomValidity("");
    author.setCustomValidity("");
    pages.setCustomValidity("");
});
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let title = form.querySelector("#title");
    let author = form.querySelector("#author");
    let pages = form.querySelector("#pages");
    console.log("form submitted");
    if(!title.validity.valid || !author.validity.valid || !pages.validity.valid){
        return;
    }
        console.log(title.value.length, author.value.length, pages.value.length)
        if(title.value.length < 5){
            title.setCustomValidity("Title should be at least 5 characters long");
        }
        if(author.value.length < 5){
            author.setCustomValidity("Author should be at least 5 characters long");
        }
        if(pages.value < 1){
            pages.setCustomValidity("Pages should be a positive number");
        }
        if(!form.reportValidity()){
            event.stopImmediatePropagation()
        }

});
