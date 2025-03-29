type DynamicRouteProps = {
  params: {
    gender: string;
  };
};

const PARAM_TO_WORD = {
  mezczyzna: "Mężczyzna",
  kobieta: "Kobieta",
  dziecko: "Dziecko",
};

const DynamicRoute = ({ params }: DynamicRouteProps) => {
  return <h2>{PARAM_TO_WORD[params.gender as keyof typeof PARAM_TO_WORD]}</h2>;
};

export default DynamicRoute;
