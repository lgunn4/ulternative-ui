import React from "react";
import { useQuery } from "@apollo/react-hooks";
import ReactLoading from 'react-loading';
import './index.css';

const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  if (loading) return (<ReactLoading className="queryLoader" type="spinningBubbles" color="grey"/>);
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
