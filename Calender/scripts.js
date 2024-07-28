const monthNames = ["January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"];

let currentDate = new Date();
let selectedDate = new Date();

function renderCalendar() {
    const daysElement = document.getElementById('days');
    daysElement.innerHTML = '';

    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    document.getElementById('month').innerText = monthNames[month];
    document.getElementById('year').innerText = year;

    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        daysElement.innerHTML += '<div></div>';
    }

    for (let i = 1; i <= lastDay; i++) {
        const dayElement = document.createElement('div');
        dayElement.innerText = i;
        dayElement.onclick = () => selectDate(i);

        if (i === selectedDate.getDate() && month === selectedDate.getMonth() 
            && year === selectedDate.getFullYear()) {
            dayElement.classList.add('selected');
        }

        if (i === new Date().getDate() && month === new Date().getMonth() 
            && year === new Date().getFullYear()) {
            dayElement.classList.add('today');
        }

        daysElement.appendChild(dayElement);
    }
}

function selectDate(day) {
    selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    renderCalendar();
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

document.addEventListener('DOMContentLoaded', renderCalendar);
