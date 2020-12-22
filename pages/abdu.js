import useSWR from "swr";
import { Layout } from "../components/Layout";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Abdu = () => {
  //   https://swapi.dev/api/starships/12/
  const { data, error } = useSWR(
    "https://swapi.dev/api/starships/12/",
    fetcher
  );

  return (
    <Layout>
      <p className="text-2xl">{JSON.stringify(data)}</p>
    </Layout>
  );
};

export default Abdu;
