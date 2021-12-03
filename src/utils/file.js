import { promises as fs } from "fs";
import path from "path";

export async function getPostInfo(filePath) {
  const file = path.join('posts', filePath);
  const stat = await fs.stat(file);
  const date = stat.ctime;
  const title = filePath.split('.')[0];
  const link = `/posts/${title}`;

  return {title, date, link};
}