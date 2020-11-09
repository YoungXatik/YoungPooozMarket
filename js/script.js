const myCollapsible = document.getElementById('navbarSupportedContent')
myCollapsible.addEventListener('show.bs.collapse', function () {
    document.getElementById("contacts").classList.remove('offset-5')
})
myCollapsible.addEventListener('hidden.bs.collapse', function () {
    document.getElementById('contacts').classList.add('offset-5');
})


let mql = window.matchMedia('(min-width: 1200px)');
mql.addEventListener("change", (e) => {
    if (e.matches) {
        document.getElementById('contacts').classList.add('offset-5');

    } else {
        document.getElementById("contacts").classList.remove('offset-5');
    }
})