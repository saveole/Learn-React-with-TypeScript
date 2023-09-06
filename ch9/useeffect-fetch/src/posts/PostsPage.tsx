import { PostData } from './types';
import { PostsList } from './PostsList';
import { savePost } from './savePost';
import { NewPostForm } from './NewPostForm';
import { useLoaderData, Await, useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { assertIsPosts } from './getPost';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Data = {
  posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
  if (typeof data != 'object') {
    throw new Error("Data isn't object");
  }
  if (data === null) {
    throw new Error('data is null');
  }
  if (!('posts' in data)) {
    throw new Error("Data doesn't contain posts");
  }
}

export function PostsPage() {
  // const data = useLoaderData();
  // assertIsData(data);

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(savePost, {
    onSuccess: (savedPost) => {
      queryClient.setQueryData<PostData[]>(['postsData'], (oldPosts) => {
        if (oldPosts === undefined) {
          return [savedPost];
        } else {
          return [savedPost, ...oldPosts];
        }
      });
      navigate('/');
    },
  });

  const data = useLoaderData();
  assertIsData(data);

  return (
    <div className="w-96 mx-auto mt-6">
      <h2 className="text-xl text-slate-900 font-bold">Posts</h2>
      <NewPostForm onSave={mutate} />
      <Suspense fallback={<div>Fetching...</div>}>
        <Await resolve={data.posts}>
          {(posts) => {
            assertIsPosts(posts);
            return <PostsList posts={posts} />;
          }}
        </Await>
      </Suspense>
    </div>
  );
}
