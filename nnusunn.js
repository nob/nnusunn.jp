$(document).ready(function(){
    $('.post').each(function(i){
        $(this).find('.tags a').each(function(i){
            tag = $(this).text();
            if(tag === 'fav' or tag === 'favs') {
                $(this).parentsUntil('.post').find('.fav-icon').show();        
                return false;
            }
        });
    });
});
