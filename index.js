//add item to list
$(function () {
    $('#js-shopping-list-form').submit(function (event) {
        event.preventDefault();
        const grocery = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val(" ");
        $('.shopping-list').append(
            `<li>
          <span class="shopping-item">${grocery}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
});

//cross through line when checked
$('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

//remove from list
$('.shopping-list').on('click', '.shopping-item-delete', function (event) {
    $(this).closest('li').remove();
});  
