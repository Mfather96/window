const timer = (id, deadline) => {

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              seconds = Math.floor((t / 1000) % 60),
              minutes = Math.floor((t / 1000 / 60) % 60),
              hours = Math.floor((t / 1000 / 60 / 60) % 24),
              days = Math.floor(t / 1000 / 60 / 60 / 24);

        return {
            total: t,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
        };
    }

    function setClock(selector, deadline) {
        
        const timerContainer = document.querySelector(selector),
            days = timerContainer.querySelector('#days'),
            hours = timerContainer.querySelector('#hours'),
            minutes = timerContainer.querySelector('#minutes'),
            seconds = timerContainer.querySelector('#seconds'),
            intervalId = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            let t = getTimeRemaining(deadline);
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(intervalId);
            }
        }
    }

    function addZero(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    setClock(id, deadline);
};

export default timer;