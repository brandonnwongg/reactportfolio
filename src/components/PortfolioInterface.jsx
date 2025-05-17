const Section = (props) => {
  const { children } = props;

  return <section>{children}</section>;
};

export const PortfolioInterface = () => {
  return (
    <>
      <Section>
        <h1>Home</h1>
      </Section>
      <Section>
        <h1>Skills</h1>
      </Section>
      <Section>
        <h1>Academic Projects</h1>
      </Section>
      <Section>
        <h1>Personal Projects</h1>
      </Section>
      <Section>
        <h1>Contact</h1>
      </Section>
    </>
  );
};
