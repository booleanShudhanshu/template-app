import React, { Suspense } from "react";
import Loading from "../component/loading";
import ErrorBoundary from "../component/errorBoundary";
const Master = (props: any) => {
  return (
    <Suspense fallback={<Loading loading={true} isFallback={true} />}>
      <ErrorBoundary>{props.children}</ErrorBoundary>
    </Suspense>
  );
};

export default Master;
