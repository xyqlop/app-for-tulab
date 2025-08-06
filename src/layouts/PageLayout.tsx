type MyProps = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: MyProps) => {
  return <div className="page-layout">{children}</div>;
};

export default PageLayout;
