import { FC, PropsWithChildren } from "react";
import Header from "../src/component/atom/header";

const Layout: FC<PropsWithChildren> = ({ children, ...restProps }) => {
  console.log(restProps);
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
