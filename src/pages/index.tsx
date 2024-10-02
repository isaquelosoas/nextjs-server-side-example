import { GetServerSideProps } from "next";
import React from "react";

const HomePage = ({ data }: { data: { name: string } }) => {
  return (
    <div>
      <h1>Server Side Props Example</h1>
      <p>Message from API: {data.name}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: { name: string };
}> = async (context) => {
  // Fetch data from our API route
  const res = await fetch(`${process.env.BFF_URL}/api/hello`, {
    headers: { cookie: `id_token=${context.req.cookies.id_token}` },
  });
  const data = await res.json();

  // Pass the data to the page via props
  return {
    props: {
      data,
    },
  };
};

export default HomePage;
