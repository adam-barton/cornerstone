import $ from 'jquery';

export default function () {
    $(document.body).on('click', '.currencySelector', () => {
        alert("Clicked");
        $('.currency-selection-list').toggleClass('active');
    });
}
