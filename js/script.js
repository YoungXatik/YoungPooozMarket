const myCollapsible = document.getElementById('navbarSupportedContent')
console.log(myCollapsible)
myCollapsible.addEventListener('show.bs.collapse', function () {
    document.getElementById("contacts").classList.remove('offset-5')
    document.getElementById('contacts').classList.remove('col-2')
    document.getElementById("contacts").classList.add('col-12');
    document.getElementById("dropdown-menu").classList.add('col-12');
})
myCollapsible.addEventListener('hidden.bs.collapse', function () {
    document.getElementById('contacts').classList.remove('col-12');
    document.getElementById('dropdown-menu').classList.remove('col-12');
    document.getElementById('contacts').classList.add('offset-5');
    document.getElementById('contacts').classList.add('col-2');

})
