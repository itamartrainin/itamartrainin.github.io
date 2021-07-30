function scrollToAnchor(anchor) {
    document.querySelector(anchor).scrollIntoView({
        behavior: 'smooth'
    });
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}