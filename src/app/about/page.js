"use client";

export default function About(props) {
  console.log("### About props : ", props);
  return (
    <main>
      <h2>About Page</h2>
      {props && props.searchParams && <div>{props.searchParams.test}</div>}
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
