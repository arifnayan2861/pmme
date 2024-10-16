import OrganizationControl from "./_components/org-control";

const OrganizationIdLayout = ({ children }) => {
  return (
    <>
      <OrganizationControl />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
