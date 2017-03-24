import mongoose from 'mongoose';
import config from './config.json';

export default callback => {
	mongoose.connect(config.database);
	callback();
}