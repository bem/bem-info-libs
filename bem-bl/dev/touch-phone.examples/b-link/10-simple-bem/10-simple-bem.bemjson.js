({
    block: 'b-page',
    title: 'заголовок',
    head: [
        {
            elem: 'css',
            url: '_10-simple-bem.css'
        },
        {
            elem: 'css',
            ie: true,
            url: '_10-simple-bem.ie.css'
        },
        {
            block: 'i-jquery',
            elem: 'core'
        },
        {
            elem: 'js',
            url: '_10-simple-bem.pub.js'
        }
    ],
    content: {
        block: 'b-link',
        url: 'http://yandex.ru',
        content: 'Самая посещаемая страница Рунета'
    }
})
