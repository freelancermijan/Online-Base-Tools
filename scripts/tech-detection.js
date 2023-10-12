function googleSearch(type) {
    var targetDomain = document.querySelector('.target').value;

    if (!targetDomain) {
        alert('Please enter a target domain.');
        return;
    }

    var site = targetDomain;
    switch (type) {
        case 1:
            var url = 'https://builtwith.com/' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;        
            
        case 2:
            var url = 'https://w3techs.com/sites/info/' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                    
        case 3:
            var url = 'https://webtechsurvey.com/website/' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                            
        case 4:
            var url = 'https://www.wappalyzer.com/lookup/' + encodeURIComponent(site) + '/';
            window.open(url, '_blank');
            return;
                                    
        case 5:
            var url = 'https://whatcms.org/API/Tech?key=wqmgef5fud41vayb3lrd7kc0od4nzlcwr0lp43fy6cvpwhhtxlbquejkz9c44zql32eyzs&url=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                                        
        case 6:
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=code';
            window.open(url, '_blank');
            return;
                                                    
        case 7:
            var url = 'https://intelx.io/?s=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                                                    
        case 8:
            var url = 'https://dnsrepo.noc.org/?search=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                                                               
        case 9:
            var url = 'https://hunter.qianxin.com/list?search=domain%3D%22' + encodeURIComponent(site) + '%22';
            window.open(url, '_blank');
            return;
                                                                          
        case 10:
            var url = 'http://ci-www.threatcrowd.org/domain.php?domain=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                                                                                      
        case 11:
            var url = 'https://app.netlas.io/domains/?q=' + encodeURIComponent(site) + '&page=1&indices=';
            window.open(url, '_blank');
            return;
                                                                                                  
        case 12:
            var url = 'https://talosintelligence.com/reputation_center/lookup?search=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
            
        default:
            alert('Invalid option.');
            return;
    }

}