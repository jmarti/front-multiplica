
const func = () => {
    document.body.addEventListener('click', event => {
        if (event.target.className === 'item') {
            event.target.innerHTML = new Date().toTimeString().split(" ")[0];
        }
    });
};

module.exports = {
    func: func
};