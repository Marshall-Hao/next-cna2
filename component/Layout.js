import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={css.container}>
      <header>Header</header>
      <section>{children}</section>
      <footer>footer</footer>
    </main>
  );
}
