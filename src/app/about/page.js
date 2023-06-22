export default function About(props) {
  console.log("### About props : ", props);
  return (
    <main>
      <h2>About Page</h2>

      {props && props.searchParams && (
        <p>
          <strong>{props.searchParams.test}</strong>
        </p>
      )}
    </main>
  );
}
