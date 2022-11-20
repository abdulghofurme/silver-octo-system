import { FC, PropsWithChildren } from "react";

const IndexPage: FC<PropsWithChildren> = (props) => {
  console.log(props);
  return <h1 className="b-typography__h4 b-color-text__teal--800">Index Page</h1>;
};

export default IndexPage;
