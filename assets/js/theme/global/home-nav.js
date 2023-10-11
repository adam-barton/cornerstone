import $ from 'jquery';

export default function homeNav() {
    const menu = $('dropbtn');
    const menu2 = $('.help-button');
    const newmenu = $('.dropbtn');
    const target = $('#caret-nav .navPages');
    const target2 = $('#caret-nav');
    const targetnew = $('#dropdown-nav-container-new');
    // eslint-disable-next-line no-empty
    if ($(window).width() < 800) {
        $(newmenu).mousedown((e)=> {
            $(target2).css('display') === 'none' ? $(target2).css({display: 'block'}) : $(target2).css({display: 'none'});
        })
    } else {
        // Hide the menu on click
        // $(document).mouseup((e) => {
        //     if (!menu.is(e.target)
        // && menu.has(e.target).length === 0) {
        //         menu.hide();
        //         target2.hide();
        //     }
        // });

        // Show the menu on hover
        $(menu).mouseover(() => {
            $(target).show();
            $(target).css({ display: 'block' });
        });
    }
}
