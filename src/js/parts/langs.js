


const langsElem = document.querySelector('.multilanguage');
const openBtn = langsElem.querySelector('button');
const label = langsElem.querySelector('button span');
const langs = langsElem.querySelectorAll('li a');

openBtn.addEventListener('click', (е) => {
    langsElem.classList.toggle('_open');
})

langs.forEach(lang => {

    lang.addEventListener('click', (e) => {
        e.preventDefault();

        label.textContent = lang.textContent
        langsElem.classList.remove('_open')

        langs.forEach(item => {
            item.classList.remove('_selected')
        })

        lang.classList.add('_selected')
    })
})

