module.exports = {
    home(req, res) {
        const error = req.query.error;
        if (error == undefined || error == 'false') {
            res.render('index', { pages: 'enter-room', error: false });
        } else if (error == 'true') {
            res.render('index', { pages: 'enter-room', error: true });
        }
    },
    createPass(req, res) {
        const error = req.query.error;
        if (error == undefined || error == 'false') {
            res.render('index', { pages: 'create-pass', error: false });
        } else if (error == 'true') {
            res.render('index', { pages: 'create-pass', error: true });
        }
    }
}