function googleSearch(type) {
    var targetDomain = document.querySelector('.target').value;

    if (!targetDomain) {
        alert('Please enter a target domain.');
        return;
    }

    var site = targetDomain;
    switch (type) {
        case t1:
            var url = 'https://builtwith.com/' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;        
            
        case t2:
            var url = 'https://w3techs.com/sites/info/' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                    
        case t3:
            var url = 'https://webtechsurvey.com/website/' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                            
        case t4:
            var url = 'https://www.wappalyzer.com/lookup/' + encodeURIComponent(site) + '/';
            window.open(url, '_blank');
            return;
                                    
        case t5:
            var url = 'https://whatcms.org/API/Tech?key=wqmgef5fud41vayb3lrd7kc0od4nzlcwr0lp43fy6cvpwhhtxlbquejkz9c44zql32eyzs&url=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
            
        default:
            alert('Invalid option.');
            return;
    }

}