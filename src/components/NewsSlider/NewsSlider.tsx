import { Card, CardContent, Skeleton, Typography } from "@mui/material";
import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import { useApp } from "../../context";
import { useNews } from "../../services";

export const NewsSlider: FC = () => {
  const {showNews} = useApp();
  const { isLoading, data, isError } = useNews();

  if(!showNews) {
    return null;
  }

  if (isLoading) {
    return <Skeleton variant="rounded" height={120} />;
  }

  if (isError) {
    return (
      <Typography variant="subtitle1" textAlign="center">
        Error fetch news
      </Typography>
    );
  }

  return (
    <Carousel indicators={false}>
      {data?.articles.map((article) => (
        <Card key={article.title}>
          <CardContent>
            <Typography variant="subtitle1">{article.title}</Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};
