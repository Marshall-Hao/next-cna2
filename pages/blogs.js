const Blog = ({ posts }) => {
  console.log("render post", posts);
  return (
    <main>
      <h1>Blog List</h1>
      <p>done with getStaticProps</p>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </main>
  );
};

// * get data api
export async function getStaticProps() {
  // * 不推荐直接请求api routes,会对yarn build有影响，因为要在构建的时候请求数据
  const res = await fetch(
    "http://localhost:3000/api/posts "
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 3, // * 3s内调取缓存中的props,不会重render，返回304
  };
}

export default Blog;
