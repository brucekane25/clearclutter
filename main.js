const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;
const fse = require("fs-extra");
app.get("/", (req, res) => {
    res.send("<h1><b>The Clutter has been UNCLUTTERRED</b></h1>");
});

const folderPath = "./Mainf/";
let fils = fs.readdirSync(folderPath);

// console.log(fils);

for (let index = 0; index < fils.length; index++) {
    const element = fils[index];
    let dotIndex = element.indexOf(".");
    let ext = element.slice(dotIndex);

    console.log(`${element}  ${dotIndex}  ${ext}`);

    if (ext === ".txt") {
        try {
            if (!fs.existsSync("./Mainf/Text")) {
                fs.mkdirSync("./Mainf/Text");
            }
            fse.move(
                `./Mainf/${element}`,
                `./Mainf/Text/${element}`,
                { overwrite: true },
                () => {
                    console.log("File moved Successfully");
                }
            );
        } catch (error) {
            console.log("Folder already Exists");
        }
    } else if (ext === ".jpg") {
        try {
            if (!fs.existsSync("./Mainf/Images")) {
                fs.mkdirSync("./Mainf/Images");
            }
            fse.move(
                `./Mainf/${element}`,
                `./Mainf/Images/${element}`,
                { overwrite: true },
                () => {
                    console.log("File moved Successfully");
                }
            );
        } catch (error) {
            console.log("Folder already Exists ");
        }
    } else if (ext === ".zip") {
        try {
            if (!fs.existsSync("./Mainf/Compressed")) {
                fs.mkdirSync("./Mainf/Compressed");
            }
            fse.move(
                `./Mainf/${element}`,
                `./Mainf/Compressed/${element}`,
                { overwrite: true },
                () => {
                    console.log("File moved Successfully");
                }
            );
        } catch (error) {
            console.log("Folder already Exists ");
        }
    } else {
        console.log(`Skipping extension : ${ext}`);
    }
}

app.listen(port, () => {
    console.log(`My app is running on port ${port}`);
});
