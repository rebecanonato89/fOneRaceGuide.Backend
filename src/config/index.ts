import { config } from 'dotenv';
import fs from 'fs';
import ph from 'path';

const envDir = process.cwd();
const envFile = `.env.${process.env.NODE_ENV}`;
const envPath = ph.join(envDir, envFile);
const path = fs.existsSync(envPath) ? envPath : ph.join(envDir, '.env');

config({ path });

export const server = {
	port: process.env.PORT,
	env: process.env.NODE_ENV,
};
