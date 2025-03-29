window.addEventListener('message', function(e) {
    const data = e.data;
    
    if (data.action === "startLoading") {
        var general = document.querySelector('.general');
        if (general) {
            general.style.display = 'flex';

            if (data.duration) {
                setTimeout(() => {
                    removeElement(general);
                }, data.duration);
            }
        }
    }
    
    if (data.action === "stopLoading") {
        const general = document.querySelector('.general');
        if (general) {
            removeElement(general);
        }
    }
});

function removeElement(target) {
    const animation = target.animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 1000
    });
    
    animation.onfinish = () => {
        target.style.display = 'none';
        target.style.opacity = 1;
    };
}
