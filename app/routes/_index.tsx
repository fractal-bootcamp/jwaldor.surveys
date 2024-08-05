import { useEffect, useState } from "react";

export const getSurveys = async () => {
  const data = await fetch("http://localhost:4000/");

  console.log(data);

  const surveys = (await data.json()) as {
    surveys:Surveys
  };

  return surveys
};

type Surveys = {
  title: string;
  id: number;
}[];

export default function Index() {
  const [surveys, setSurveys] = useState<Surveys>([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getSurveys();

      setSurveys(data.surveys);
    };

    loadData();
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {surveys.map((survey) => (
        <div key={survey.id}>
          <h2>{survey.title}</h2>
        </div>
      ))}
    </div>
  );
}
