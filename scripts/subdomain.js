function googleSearch(type) {
    var targetDomain = document.querySelector('.target').value;

    if (!targetDomain) {
        alert('Please enter a target domain.');
        return;
    }

    var site = targetDomain;
    switch (type) {
        case s1:
            var url = 'https://crt.sh/?q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;        
            
        case s2:
            var url = 'https://search.censys.io/search?resource=hosts&sort=RELEVANCE&per_page=25&virtual_hosts=EXCLUDE&q=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                    
        case s3:
            var url = 'https://securitytrails.com/domain/' + encodeURIComponent(site) + '/dns';
            window.open(url, '_blank');
            return;
                            
        case s4:
            var url = 'https://bevigil.com/osint-api?query=' + encodeURIComponent(site) + '&criteria=domain';
            window.open(url, '_blank');
            return;
                                    
        case s5:
            var url = 'https://fullhunt.io/search?query=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                                        
        case s6:
            var url = 'https://github.com/search?q=' + encodeURIComponent(site) + '&type=code';
            window.open(url, '_blank');
            return;
                                                    
        case s7:
            var url = 'https://intelx.io/?s=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                                                    
        case s8:
            var url = 'https://dnsrepo.noc.org/?search=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                                                               
        case s9:
            var url = 'https://hunter.qianxin.com/list?search=domain%3D%22' + encodeURIComponent(site) + '%22';
            window.open(url, '_blank');
            return;
                                                                          
        case s10:
            var url = 'http://ci-www.threatcrowd.org/domain.php?domain=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
                                                                                      
        case s11:
            var url = 'https://app.netlas.io/domains/?q=' + encodeURIComponent(site) + '&page=1&indices=';
            window.open(url, '_blank');
            return;
                                                                                                  
        case s12:
            var url = 'https://talosintelligence.com/reputation_center/lookup?search=' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
            
        default:
            alert('Invalid option.');
            return;
    }

}