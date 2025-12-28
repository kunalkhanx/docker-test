const axios = require('axios');
require('dotenv').config();

(async () => {
    let loops = 1;
    const handler = setInterval(async () => {
        const response = await axios.get(`http://192.168.0.196:3000/api/v1/dev/status`);
        console.log('Service is running in loop:', loops);
        console.log('Response:', JSON.stringify(response.data, null, 2));
        loops += 1;
        if (loops > 30) {
            clearInterval(handler);
            console.log('Service has stopped on loop:', loops - 1);
        }
    }, 2000);
})()