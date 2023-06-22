import React from "react";

export default function About(props) {
  console.log("### prosp : ", props);
  return (
    <div>
      <h1>About Page!</h1>
      <p>
        쿼리 : <strong>{props.query && props.query.test}</strong>
      </p>
    </div>
  );
}

export const getServerSideProps = (context) => {
  return {
    props: {
      query: context.query,
    },
  };
};
