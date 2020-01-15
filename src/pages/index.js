import Layout from "../components/layout";
import StatusEntry from "../components/StatusEntry"
import StatusList from "../components/StatusList"

function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-start">
        <StatusEntry />
        <StatusList />
      </div>
    </Layout>
  );
}

export default Home;
