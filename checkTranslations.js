const path = require('path');
const fs = require('fs');
const exec = require('child_process').exec;


const dirPath = path.join(__dirname, 'src/assets/i18n');

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('Unable to scan assets');
        return;
    }

    files.forEach((file1, index1) => {
        files.forEach((file2, index2) => {
            if (file1 == file2 || index2 > index1) return;

            const diff = exec(`json-diff -k ${dirPath}/${file1} ${dirPath}/${file2}`, (err, stdout, stderr) => {
                if (err && err.code) {
                    console.log(`Files ${file1} and ${file2} are not equal! Please maintain consistent translations.`);
                    process.stdout.write(stdout);
                    process.exitCode = 1;
                }
            });
        });
    });
});