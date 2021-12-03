import * as fs from "fs";
import * as path from "path";
import { dateFormat } from "../../utils/date.js";

export function get() {
  let postList = [];
  fs.readdirSync('posts').forEach(filePath => {
    const file = path.join('posts', filePath);
    const date = dateFormat(fs.statSync(file).ctime);
    const title = filePath.split('.')[0];
    const link = `/posts/${title}`;

    postList.push({ title, date, link });
  });
  const body = JSON.stringify(postList);

  return { body };
}