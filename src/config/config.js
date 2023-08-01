import dotenv from 'dotenv';

import path from 'path';

dotenv.config({
    path: path.resolve(process.env.NODE_ENV + '.env')
});

export default {
    NODE_ENV: process.env.NODE_ENV || 'dev',
    PORT: process.env.PORT || 8080,
    MONGO_URL: process.env.MONGO_URL,

}