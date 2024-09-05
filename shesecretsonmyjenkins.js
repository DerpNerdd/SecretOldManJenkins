const http = require('http');
const { readFileSync } = require('fs');
const path = require('path');

function serveFile(res, filePath) {
    const fullPath = path.join(__dirname, filePath);
    try {
        const data = readFileSync(fullPath, 'utf8');
        res.end(data);
    } catch (err) {
        console.error('Error:', err);
        res.end('Server error');
    }
}

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            serveFile(res, './welcome.html');
            break;
        case '/hint':
            serveFile(res, './hints/welcome_hint.html');
            break;
        case '/sos':
            serveFile(res, './sos.html');
            break;
        case '/sos/hint':
            serveFile(res, './hints/sos_hint.html');
            break;
        case '/thisorthat':
            serveFile(res, './thisorthat.html');
            break;
        case '/thisorthat/hint':
            serveFile(res, './hints/thisorthat_hint.html');
            break;
        case '/humans':
            serveFile(res, './humans.html');
            break;
        case '/humans/hint':
            serveFile(res, './hints/humans_hint.html');
            break;
        case '/sacramento':
            serveFile(res, './sacramento.html');
            break;
        case '/sacramento/hint':
            serveFile(res, './hints/sacramento_hint.html');
            break;
        case '/onedecision':
            serveFile(res, './onedecision.html');
            break;
        case '/onedecision/hint':
            serveFile(res, './hints/onedecision_hint.html');
            break;
        case '/mario':
            serveFile(res, './mysociety.html');
            break;
        default:
            res.end('WRONGGGGGGGGGGGGGGGG!!!! Maybe write /hint in the url...');
    }
});

server.listen(3000, (err) => {
    if (err) {
        console.log('Server start error:', err);
    } else {
        console.log('Server is up and running on port 3000');
    }
});
