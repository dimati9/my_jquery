(function($) {
    $(function() {

        $('div.blocks_captions').each(function() {
            $(this).find('div.block').each(function (a) {
                $(this).click(function () {
                    $(this).addClass('active').siblings().removeClass('active')
                        .closest('div.tabs').find('div.text').removeClass('active').eq(a).addClass('active');
                });
            });
        });

    })
})(jQuery)
