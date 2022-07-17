type TextDateProps = { dateStr: string };

function getLocale() {
  return navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;
}

export const TextDate = ({ dateStr }: TextDateProps) => {
  const formattedDate = new Date(dateStr).toLocaleDateString(getLocale(), {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <p>
      <strong>{formattedDate}</strong>
    </p>
  );
};
