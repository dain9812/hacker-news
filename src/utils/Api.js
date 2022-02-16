import axios from "axios";

const url = "https://hacker-news.firebaseio.com/v0";
const json = ".json?print=pretty";

export const getStory = async (id) => {
  const story = await axios.get(`${url}/item/${id}${json}`);
  return story;
};

export const getStories = async (type, preItem) => {
  const { data: storyIds } = await axios.get(`${url}/${type}stories${json}`);
  const stories = await Promise.all(storyIds.slice(preItem, 30).map(getStory));
  return stories;
};

export const getUser = async (id) => {
  const user = await axios.get(`${url}/user/${id}${json}`);
  return user;
};

export const getComments = async (ids) => {
  let postsArray = [];
  ids.forEach(async (id) => {
    await postsArray.push(getStory(id).then((post) => post.data));
  });
  return await axios.all(postsArray).then((posts) => {
    return posts;
  });
};
