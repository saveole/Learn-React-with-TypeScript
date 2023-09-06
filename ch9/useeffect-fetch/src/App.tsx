import { PostsPage } from './posts/PostsPage';
import { createBrowserRouter, RouterProvider, defer } from 'react-router-dom';
import { getPosts } from './posts/getPost';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PostsPage />,
      loader: async () => defer({ posts: getPosts() }),
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
