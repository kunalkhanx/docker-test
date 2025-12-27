require('dotenv').config();

(async => {
    let loops = 1;
    const handler = setInterval(() => {
        console.log('Service is running in loop:', loops);
        loops += 1;
        if (loops > 30) {
            clearInterval(handler);
            console.log('Service has stopped on loop:', loops - 1);
        }
    }, 1000);
})()