export const stickyHeader = () => {
    const header = document.querySelector('header');
    if (!header) return

    const headerheigth = header.getBoundingClientRect().height;

    const hero = document.querySelector('.hero');
    const heroheigth = hero.getBoundingClientRect().height;


    const sticky = () => {
        if (window.scrollY >= heroheigth - headerheigth) {
            header.classList.add('_sticky')
            header.classList.add('_scrolled')
        }
        else {
            header.classList.remove('_sticky')
            header.classList.remove('_scrolled')
        }
    }

    sticky();
    window.addEventListener('scroll', sticky);
}