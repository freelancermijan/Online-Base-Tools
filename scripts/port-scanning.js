function googleSearch(type) {
    var targetDomain = document.querySelector('.target').value;

    if (!targetDomain) {
        alert('Please enter a target domain.');
        return;
    }

    var site = targetDomain;
    switch (type) {
        case 1:
            var url = 'https://dnschecker.org/port-scanner.php?query=' + encodeURIComponent(site) + '&ptype=server';
            window.open(url, '_blank');
            return;
            
        default:
            alert('Invalid option.');
            return;
    }

}