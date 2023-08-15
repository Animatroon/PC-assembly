
const main = document.querySelector(".main");

window.onscroll = () => {
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo__img');
    const scrollY = window.scrollY;
    console.log(window.scrollY);
    if (scrollY > 100) {
        header.classList.add('header__fixed');
        logo.classList.add('logo__img-fixed');
        
    } else if (scrollY < 100) {
        header.classList.remove('header__fixed');
        logo.classList.remove('logo__img-fixed');

    }
};

const time = '2024-01-01';

function timer(id, deadline) {
    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t / (1000 * 60 * 60 * 24)) ),
            seconds = Math.floor( (t / 1000) % 60 ),
            minutes = Math.floor( (t / 1000 / 60) % 60),
            hours = Math.floor( (t / (1000 * 60 * 60) % 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock() {
            const t = getTimeRemaining(endtime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, deadline);
}

timer('.time', time);







