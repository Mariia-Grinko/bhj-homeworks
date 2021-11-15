const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');


chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
});

document.addEventListener('keypress', (event) => {

    if (event.key === 'Enter') {
        if (input.value !== '') {
            let now = new Date();

            let time = now.getHours() + ":" + now.getMinutes();

            messages.innerHTML += `<div class="message message_client">
            <div class="message__time">` + time + `</div>
            <div class="message__text"> ` + input.value + `</div>
            </div>`;
            input.value = '';
            messages.innerHTML += `<div class="message">
            <div class="message__time">` + time + `</div>
            <div class="message__text">` + getAnswer() + `</div>
        </div>`;
        }

    }
});


function getAnswer() {
    const answer = [
            'Привет!',
            'Пока!',
            'Не знаю.',
            'Как дела?'
        ],
        index = Math.floor(Math.random() * answer.length);

    return answer[index];
}