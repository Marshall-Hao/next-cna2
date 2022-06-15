import Link from "next/link";
import CustomLink from "../component/CustomLink";

const Home = () => {
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
    </main>
  );
};

export default Home;
