import english from "./en.json";
import spanish from "./es.json";

const LAGUAGES = {
  English: "en",
  Spanish: "es",
};

export const getI18N = ({ currentLocale }: {currentLocale: string}) => {
  if (currentLocale == LAGUAGES.English) return english;
  if (currentLocale == LAGUAGES.Spanish) return spanish;
  return english;
};
