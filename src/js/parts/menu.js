import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const body = document.body;
const menu = document.querySelector('._side-fixed');
const burger = document.querySelector('.header__burger');


if (burger && window.innerWidth <= 768) {
    burger.addEventListener('click', (е) => {
        menu.classList.toggle('_open');
        burger.classList.toggle('_active');
        document.body.classList.toggle('_noscroll');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding()
        }
    })
}
