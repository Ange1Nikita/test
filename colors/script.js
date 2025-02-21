// Получаем ссылки на бургер-меню и основное меню
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

// Добавляем обработчик клика на бургер-меню
burger.addEventListener('click', () => {
    burger.classList.toggle('active'); // Переключаем класс 'active' для анимации бургера
    menu.classList.toggle('active'); // Переключаем класс 'active' для показа/скрытия меню
});