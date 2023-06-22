"use client";

export default function About(props) {
  console.log("### About props : ", props);
  return (
    <main>
      <h2>About Page</h2>
    </main>
  );
}

export const getServerSideProps = (context) => {
  return {
    props: {
      context,
    },
  };
};
