import * as path from 'path';
import { promises as fs } from 'fs';
import { getPostInfo } from '../../utils/file.js';

export async function get({ params }) {
  const { slug } = params;
  const fileName = slug + '.md';
  const pathName = path.join('posts', fileName);
  const [postInfo, post] = await Promise.all([
    getPostInfo(fileName),
    fs.readFile(pathName, 'utf-8')
  ]);

  return {
    body: { post, postInfo }
  };
}
