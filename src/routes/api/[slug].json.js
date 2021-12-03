import * as fs from "fs";
import * as readline from "readline";

async function parseFile(path) {
  const reader = readline.createInterface({
    input: fs.createReadStream(path),
    crlfDelay: Infinity,
  });

  let lineCount = 0;
  let frontMatter = [];
  let post = "";
  for await (const line of reader) {
    if (lineCount > 3) {
      post += (line + '\n');
    } else if (lineCount !== 0 && lineCount !== 3) {
      frontMatter.push(line);
    }
    lineCount++;
  }
  return { frontMatter, post };
}

function parseFrontMatter(lines) {
  let retObj = {};
  for (const line of lines) {
    const pair = line.split(':');
    retObj[pair[0]] = pair[1].trim();
  }

  return retObj;
}

export async function get({ params }) {
  const { slug } = params;
  const {frontMatter, post} = await parseFile(`./posts/${slug}.md`);
  const frontMatterObj = parseFrontMatter(frontMatter);

  return {
    body: {
      post,
      frontMatter: frontMatterObj,
    }
  }
}