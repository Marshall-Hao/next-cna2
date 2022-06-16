export default function Comments({ data }) {
  console.log("comments", data);
  return (
    <main>
      <h1>comments list</h1>
      <p>getServersideprops ssr</p>
      <ul>
        {data.map((comment) => {
          return (
            <li key={comment.id}>{comment.content}</li>
          );
        })}
      </ul>
    </main>
  );
}

export async function getServerSideProps(context) {
  // * 不推荐直接请求api routes,会对yarn build有影响，因为要在构建的时候请求数据
  const res = await fetch(
    "http://localhost:3000/api/comments "
  );
  const comments = await res.json();
  console.log("------------", comments);
  return {
    props: {
      data: comments,
    },
  };
}
