import app from './server';
import config from './config';

app.listen(config.apiPort, () => {
    console.log('Server is running on port', config.apiPort);
});
