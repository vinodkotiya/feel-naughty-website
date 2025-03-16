
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Build the React application
console.log('Building React application...');
execSync('npm run build', { stdio: 'inherit' });

console.log('Creating static HTML export...');

// Read the generated index.html
const indexPath = path.resolve(__dirname, 'dist/index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Create an export directory if it doesn't exist
const exportDir = path.resolve(__dirname, 'static-export');
if (!fs.existsSync(exportDir)) {
  fs.mkdirSync(exportDir);
}

// Copy the entire dist directory to the export directory
const distDir = path.resolve(__dirname, 'dist');
fs.cpSync(distDir, exportDir, { recursive: true });

// Create a resources directory for videos if it doesn't exist
const resourcesDir = path.resolve(exportDir, 'resources');
if (!fs.existsSync(resourcesDir)) {
  fs.mkdirSync(resourcesDir);
}

console.log('Static HTML export complete! Files are in the static-export directory.');
console.log('To view the static site, you can open static-export/index.html in your browser.');
