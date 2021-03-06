var Browser = require('zombie'),
    assert = require('chai').assert;

var browser;

suite('Межстраничные тесты', function() {
    setup(function() {
        browser = new Browser();
    });

    test('Запрос расценок для групп со страницы туров по реке Худ ' +
        'должен заполнять поле referrer', function(done) {
        var referrer = 'http://localhost:8080/tours/hood-river';
        browser.visit(referrer, function() {
                browser.clickLink('.requestGroupRate', function() {
                    assert(browser.field('referrer').value === referrer);
                    done();
                });
        });
    });

    test('Запрос расценок для групп со страницы туров пансионата "Орегон Коуст"' +
         'должен заполнять поле "реферрера"', function() {
         var referrer = 'http://localhost:8080/tours/oregon-coast';
         browser.visit(referrer, function() {
             browser.clickLink('.requestGroupRate', function() {
                 assert(broser.field('referrer').value == referrer);
                 done();
             });
         });
     });

     test('Посещение страницы "Запрос цены для групп" напрямую' +
          ' должен приводить к пустому полю "реферерра"', function() {
        browser.visit('http://localhost:8080/tours/request-group-rate', function() {
            assert(browser.field('referrer').value=== '');
            done();
        });
     });
});
