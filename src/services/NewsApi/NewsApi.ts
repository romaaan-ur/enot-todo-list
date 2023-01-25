import { useQuery } from "react-query";

export type Article = {
  author: string;
  title: string;
  description: string;
};

export type News = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export function useNews() {
  return useQuery("news", () =>
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2022-12-25&sortBy=publishedAt&apiKey=77b18431d0e4488685334160f238de40"
    )
      .then((response) => response.json())
      .then((response) => response as News)
  );
}
