suite('Тесты страницы "About"', function() {
    test('Страница должна содержать ссылку на страницу "Контакты"', function() {
        assert(document.querySelectorAll('a[href="/contacts"]').length, 'Отсутствует ссылка на страницу "Контакты"');
    });
});
