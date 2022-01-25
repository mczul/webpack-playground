function init(): void {
    if(!document) {
        return;
    }
    const query = document.querySelector('footer:last-of-type');
    if(!query) {
        return;
    }

    query.textContent = 'Webpack Demo 2021 with vendor feature';
}

init();
