// posts/123
import { useRouter } from "next/router";

export default function Posts({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.id}</p>
    </main>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const {
    params: { id },
  } = context;
  console.log(id);
  const res = await fetch(
    `http://localhost:3000/api/posts/${id}`
  );

  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}

// * the target render path
export async function getStaticPaths() {
  const res = await fetch(
    "http://localhost:3000/api/posts "
  );
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
}
