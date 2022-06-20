import AddPostForm from "./features/posts/AddPostForm";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <div className="App">
      <h1>React Redux Toolkit Blog</h1>
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
