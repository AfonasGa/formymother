const chanceButton = document.getElementById('chanceButton');

chanceButton.addEventListener('click', () => {
    const randomChance = Math.floor(Math.random() * 512);

    if (randomChance === 0) {
        window.location.href = 'birthday.html'; // Переход на страницу с поздравлением
    } else {
        // Выводим случайное сообщение, если не повезло
        const messages = [
            ":(",
        ];

        const randomIndex = Math.floor(Math.random() * messages.length);

        // Создаем контейнер для сообщения
        const messageContainer = document.createElement('div');
        messageContainer.textContent = messages[randomIndex];
        messageContainer.classList.add('message-container'); // Добавляем класс для стилей
        document.body.appendChild(messageContainer);

        // Анимация
        messageContainer.style.opacity = 0; // Скрываем сообщение сначала
        setTimeout(() => {
            messageContainer.style.opacity = 1; // Показываем сообщение
            messageContainer.style.transform = 'translateY(0)'; // Анимация появления снизу
        }, 100);

        // Пропадание сообщения через 2 секунды
        setTimeout(() => {
            messageContainer.style.opacity = 0;
            messageContainer.style.transform = 'translateY(100%)'; // Анимация пропадания
            setTimeout(() => {
                document.body.removeChild(messageContainer); // Удаляем элемент
            }, 300); // Удаление через 300 мс после начала пропадания
        }, 2000); 
    }
});
