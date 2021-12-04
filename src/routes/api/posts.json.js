import * as fs from 'fs';
import { getPostInfo } from '../../utils/file.js';

export async function get() {
  let postList = [];
  const filesPath = fs.readdirSync('posts');

  await Promise.all(
    filesPath.map(async (filePath) => {
      const postInfo = await getPostInfo(filePath);
      postList.push(postInfo);
    })
  );
  const body = JSON.stringify(postList);

  return { body };
}
