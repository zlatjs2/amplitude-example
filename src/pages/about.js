export default function About(props) {
  console.log("### About props : ", props);
  return (
    <main>
      <h2>About Page</h2>

      {props && props.query && (
        <p>
          <strong>{props.query.test}</strong>
        </p>
      )}
    </main>
  );
}

export const getServerSideProps = (context) => {
  return {
    props: {
      query: context.query,
    },
  };
};
