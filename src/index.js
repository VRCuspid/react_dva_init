import dva from 'dva';
import all_models from './models';
const app = dva();

all_models(app);
app.router(require('./router').default);

app.start('#root');