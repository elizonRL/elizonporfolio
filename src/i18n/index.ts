import english from "./en.json";
import spanish from "./es.json";

const LAGUAGES = {
  English: "en",
  Spanish: "es",
};

export const getI18N = ({
  currentLocale,
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale == LAGUAGES.Spanish) return { ...english, ...spanish };
  return english;
};
