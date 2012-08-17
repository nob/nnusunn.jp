$(document).ready(function(){
    $('.post').each(function(i){
        $(this).find('.tags a').each(function(i){
            tag = $(this).text();
            if(tag === 'fav' || tag === 'favs') {
                if (location.pathname.match(/post/i)) {
                    $(this).parentsUntil('.post').siblings().first().find('.fav-icon').show();        
                }
                    $(this).parentsUntil('.post').prev().find('.fav-icon').show();        
                }
                return false;
            }
        });
    });
});
