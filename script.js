// Открытие конверта
function setupEnvelope() {
    const envelope = document.getElementById('envelope');
    let isOpen = false;
    
    envelope.addEventListener('click', function() {
        if (!isOpen) {
            // Открываем конверт
            this.classList.add('open');
            isOpen = true;
            
            // Меняем заголовок страницы
            document.title = "Максиму 11! | Детали мероприятия";
        }
    });
}

// Запускаем при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setupEnvelope();
});