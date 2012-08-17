$(document).ready(function(){
    $('.post').each(function(i){
        $(this).find('.tags a').each(function(i){
            tag = $(this).text();
            if(tag === 'fav' || tag === 'favs') {
                $(this).parentsUntil('.post').prev().find('.fav-icon').show();        
                return false;
            }
        });
    });
});
