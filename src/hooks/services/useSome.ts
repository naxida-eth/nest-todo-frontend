import { useQuery, gql } from "@apollo/client";
import { useEffect } from "react";

const findAll = () => {
  return gql`
    query FindAll {
      findAll {
        id
        some
        createTime
        isOk
        isDelete
        updateTime
      }
    }
  `;
};

export const useSome = () => {
  const { loading, error, data } = useQuery(findAll());

  useEffect(() => {
    console.log({ loading, error, data });
  }, [loading, error, data]);

  return {
    ...data,
  };
};
