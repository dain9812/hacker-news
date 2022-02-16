import { useEffect, useState, useRef } from "react";
import { getStories } from "../utils/Api";

const useFetch = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [preItem, setPreItem] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    getStories(type, preItem)
      .then((stories) => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, stories };
};

export default useFetch;
