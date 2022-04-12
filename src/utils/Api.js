import axios from "axios";

const url = "https://hacker-news.firebaseio.com/v0";
const json = ".json?print=pretty";

export const getStory = async (id) => {
  const story = await axios.get(`${url}/item/${id}${json}`);
  return story;
};

export const getStories = async (type, preItem) => {
  const { data: storyIds } = await axios.get(`${url}/${type}stories${json}`);
  const stories = await axios.all(storyIds.slice(preItem, 30).map(getStory));
  return stories;
};

export const getUser = async (id) => {
  const user = await axios.get(`${url}/user/${id}${json}`);
  return user;
};

export const getComments = async (ids) => {
  let commentsArray = [];
  const lists = await axios.all(ids.map(getStory));
  lists.map((list) => commentsArray.push(list.data));
  const comments = await axios.all(commentsArray);
  return comments;
};
