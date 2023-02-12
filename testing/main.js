let navTabs = document.querySelectorAll('.tab');
navTabs.forEach(tab => {
    tab.onclick = function () {
        navTabs.forEach(e => {
            e.classList.remove('active')
        })
        tab.classList.add('active')
    }

})