import youtubeJsonData from "../assets/json/search_api_data.json";
import type { Item } from "../types/Item";

const jsonData = youtubeJsonData;

const youtubeData: Item[] = [];

jsonData.items.forEach((e) => {
  const item = {
    id: e.id.videoId,
    date: new Date(e.snippet.publishedAt).toLocaleDateString(),
    shortTitle:
      e.snippet.title.split("～").length >= 3
        ? e.snippet.title.split("～")[1]
        : "",
    fullTitle: e.snippet.title,
    thumb: e.snippet.thumbnails.high.url,
    description: e.snippet.description,
    url: `https://www.youtube.com/watch?v=${e.id.videoId}`,
  };
  youtubeData.push(item);
});
console.log(youtubeData);

export const items = youtubeData;
