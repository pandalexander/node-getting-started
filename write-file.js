const fs = require("fs/promises");

const content = "I am some content!";

fs.writeFile("./test.txt", content, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Content written!");
  }
});

async function writeFileLater() {
  try {
    const content = "I am the delayed content!";
    await setTimeout(() => {
      fs.writeFile("./test.txt", content);
    }, 2000);

    const secondContent = "I am the SECOND delayed content!";
    setTimeout(() => {
      fs.appendFile("./test.txt", "\n" + secondContent);
    }, 4000);
  } catch (err) {
    console.log(err);
  }
}

writeFileLater();
