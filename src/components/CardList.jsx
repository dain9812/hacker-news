import Card from "./Card";
import useFetch from "../hooks/useFetch";
import Comments from "./Comments";
import { useState } from "react";

const CardList = (props) => {
  const type = props.type;
  const classType = `card-list ${type}`;
  const { isLoading, stories } = useFetch(type);
  const [isOpen, setPop] = useState(false);

  return (
    <>
      {type === "show" ? (
        <div className={classType}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <div className="left">
                {stories.map(({ data: story }, index) =>
                  index % 2 === 0 ? (
                    <Card
                      key={story.id}
                      story={story}
                      type={type}
                      setPop={setPop}
                      index={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="right">
                {stories.map(({ data: story }, index) =>
                  index % 2 === 1 ? (
                    <Card
                      key={story.id}
                      story={story}
                      type={type}
                      setPop={setPop}
                      index={index}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>
              <Comments setPop={setPop} isOpen={isOpen} />
            </>
          )}
        </div>
      ) : (
        <div className={classType}>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {stories.map(({ data: story }) => (
                <Card
                  key={story.id}
                  story={story}
                  type={type}
                  setPop={setPop}
                />
              ))}
              <Comments setPop={setPop} isOpen={isOpen} />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CardList;
