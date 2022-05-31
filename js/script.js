window.addEventListener('load', function () {
    const overlay = document.querySelector('.modal-overlay');
    const modals = document.querySelectorAll('.modal-item');
    const modalClose = document.querySelector('.modal__close');
    const modalBtn = document.querySelectorAll('button[data-modal');

    modalBtn.forEach(btn => {
        btn.addEventListener('click', e => {
            overlay.classList.add('modal-overlay_active');

            let modal = e.target.getAttribute('data-modal');
            modals.forEach(item => {
                if (item.getAttribute('data-modal') == modal) {
                    item.classList.add('modal-item_df');
                    document.body.style.overflowY = 'hidden';
                    setTimeout(() => {
                        item.classList.add('modal-item_active');
                    }, 500);
                }
            });
        });
    });
    modalClose.addEventListener('click', () => {
        modalCloseFunc();
    });

    function modalCloseFunc() {
        modals.forEach(item => {
            item.classList.remove('modal-item_active');
        });
        document.body.style.overflowY = '';
        setTimeout(() => {
            overlay.classList.remove('modal-overlay_active');
            
            modals.forEach(item => {
                item.classList.remove('modal-item_df');
            });
        }, 500);
    }
    overlay.addEventListener('click', e => {
        if (e.target === overlay) {
            modalCloseFunc();
        }
    });
});