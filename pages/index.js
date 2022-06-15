import Link from "next/link";
import CustomLink from "../component/CustomLink";

const Home = ({ count, setCount }) => {
  const get = () => {
    fetch("http://localhost:3000/api/method")
      .then((res) => res.json())
      .then((json) => console.log("get", json));
  };

  const post = () => {
    fetch("http://localhost:3000/api/method", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((json) => console.log("get", json));
  };

  return (
    <main>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/book">
            <a>to: /book</a>
          </Link>
        </li>
        <li>
          <Link href="/my/book/one">
            <a>to: /book/one</a>
          </Link>
        </li>
        <li>
          <Link href="/book/[id]" as="book/123">
            <a style={{ color: "red" }}>to: /book/123</a>
          </Link>
        </li>
        <li>
          <Link href="book/one" passHref>
            <CustomLink />
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "/book",
              query: { year: "2022" },
            }}
          >
            <a>URL Object switch to /book?year=2022</a>
          </Link>
        </li>
        <li>
          <Link href="/book" replace>
            <a>Replace to /book</a>
          </Link>
        </li>
        <li>
          <Link href="/book">
            <button>btn for switch /book</button>
          </Link>
        </li>
      </ul>
      <div>
        <button onClick={get}>get</button>
        <button onClick={post}>post</button>
        <h1>{count}</h1>
        <button onClick={() => setCount((c) => c + 1)}>
          +
        </button>
      </div>
    </main>
  );
};

export default Home;
