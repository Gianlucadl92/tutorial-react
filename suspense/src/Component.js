import React, { Suspense } from "react";
import Spinner from "./components/Spinner";
const Photos = React.lazy(() => import("./components/Photos"));
const Comments = React.lazy(() => import("./components/Comments"));

const Component = () => {
  return (
    <div className="container ">
      <h1>Suspense</h1>
      <Suspense
        fallback={
          <div>
            <Spinner />
          </div>
        }
      >
        <Photos />

        <Comments />
      </Suspense>
    </div>
  );
};

export default Component;
