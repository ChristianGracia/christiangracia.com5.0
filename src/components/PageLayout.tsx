import { type FC, type PropsWithChildren } from "react";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default PageLayout;
