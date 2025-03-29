type ContactProps = {
  children: React.ReactNode;
};

const Contact = ({ children }: ContactProps) => {
  return (
    <>
      <h1>Kontakt!</h1>
      {children}
    </>
  );
};

export default Contact;
