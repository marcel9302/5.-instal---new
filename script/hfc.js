fetch('/4. instal/script/header-first-container.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_header-first-container");
        let newelem = document.createElement("div");
        newelem.classList.add('header-first-container');
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })