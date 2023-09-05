import { PostData } from './types';

export async function getPosts() {
  const response = await fetch(process.env.REACT_APP_API_URL!);
  const body = (await response.json()) as unknown;
  assertIsPOsts(body);
  return body;
}

export function assertIsPOsts(postData: unknown): asserts postData is PostData[] {
  if (!Array.isArray(postData)) {
    throw new Error("posts isn't an array");
  }

  if (postData.length === 0) {
    return;
  }

  postData.forEach((post) => {
    if (!('id' in post)) {
      throw new Error("post doesn't contain id");
    }
    if (typeof post.id !== 'number') {
      throw new Error('id is not a number');
    }
    if (!('title' in post)) {
      throw new Error("post doesn't contain title");
    }
    if (typeof post.title !== 'string') {
      throw new Error('title is not a string');
    }
    if (!('description' in post)) {
      throw new Error("post doesn't contain description");
    }
    if (typeof post.description !== 'string') {
      throw new Error('description is not a string');
    }
  });
}
