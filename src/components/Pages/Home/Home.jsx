import React from "react";
import Layout from "../../Layout/Layout";
import Userform from "../../Userform/Userform";

function Home() {
  return (
    <Layout>
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
            <h5 className="text-center mt-2">Introduceti Angajati</h5>
            <Userform />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
