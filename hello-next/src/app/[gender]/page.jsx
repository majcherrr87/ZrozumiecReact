const PARAM_TO_WORD = {
  mezczyzna: "Mężczyzna",
  kobieta: "Kobieta",
  dziecko: "Dziecko",
};

const DynamicRoute = ({ params }) => {
  return <h2>{PARAM_TO_WORD[params.gender]}</h2>;
};

export async function generateStaticParams() {
  return [
    {
      gender: "mezczyzna",
    },
    {
      gender: "kobieta",
    },
    {
      gender: "dziecko",
    },
  ];
}

export default DynamicRoute;
