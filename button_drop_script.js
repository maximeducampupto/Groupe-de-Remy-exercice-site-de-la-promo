var drop_buttons = document.getElementsByClassName('drop_button');


Array.from(drop_buttons).forEach(function(button) {
    button.addEventListener('click', function(e) {
        var article_content_collection = button.parentNode.parentNode.getElementsByClassName('article_content');

        if (article_content_collection[0].style.display !== 'none') {
            article_content_collection[0].style.display = 'none';
            button.classList.remove('fa-minus-square')
            button.classList.add('fa-plus-square');
            return;
        } else{
            article_content_collection[0].style.display = 'block';
            button.classList.remove('fa-plus-square')
            button.classList.add('fa-minus-square');
            return;
        }

    });
});