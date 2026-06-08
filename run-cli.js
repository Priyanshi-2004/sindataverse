import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const localTmp = path.join(__dirname, 'tmp');

if (!fs.existsSync(localTmp)) {
  fs.mkdirSync(localTmp, { recursive: true });
}

// Override temp environment variables to point to our local project folder
process.env.TEMP = localTmp;
process.env.TMP = localTmp;

// Load and run the original Vite CLI
import('./node_modules/vite/bin/vite.js');
