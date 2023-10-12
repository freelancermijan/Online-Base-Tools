function googleSearch(type) {
    var targetDomain = document.querySelector('.target').value;

    if (!targetDomain) {
        alert('Please enter a target domain.');
        return;
    }

    var site = targetDomain;
    switch (type) {
        case 1:
            var url = 'https://quttera.com/detailed_report/' + encodeURIComponent(site);
            window.open(url, '_blank');
            return;
            
            case 2:
                var url = 'https://web-check.as93.net/results/https%3A%2F%2F' + encodeURIComponent(site);
                window.open(url, '_blank');
                return;
                
        default:
            alert('Invalid option.');
            return;
    }

}