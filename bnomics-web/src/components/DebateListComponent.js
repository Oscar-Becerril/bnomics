import React from "react";
import { graphqlOperation } from "aws-amplify";
import { Connect } from "aws-amplify-react";
import { listDebatePosts } from "../graphql/queries";
import { onCreateDebatePost } from "../graphql/subscriptions";
import { Loading, Card, Icon, Tag } from "element-react";
import Error from "./Error";

const DebateListComponent = ({ searchResults }) => {
  const onNewDebatePost = (prevQuery, newData) => {
    let updatedQuery = { ...prevQuery };
    const updatedDebatePostList = [
      newData.onCreateMarket,
      ...prevQuery.listDebatePosts.items
    ];
    updatedQuery.listDebatePosts.items = updatedDebatePostList;
    return updatedQuery;
  };

  return (
    <Connect
      query={graphqlOperation(listDebatePosts)}
      subscription={graphqlOperation(onCreateDebatePost)}
      onSubscriptionMsg={onNewDebatePost}
    >
      {({ data, loading, errors }) => {
        if (errors.length > 0) return <Error error={errors} />;
        if (loading || !data.listDebatePosts)
          return <Loading fullscreen={true} />;
        const debates =
          searchResults.length > 0 ? searchResults : data.listDebatePosts.items;

        return (
          <>
            {searchResults.length > 0 ? (
              <h2>
                <Icon type="success" name="check" className="icon" />
                {searchResults.length}
              </h2>
            ) : (
              <h2>Debate title</h2>
            )}
            {debates.map(debate => (
              <div key={debate.id} className="my-2">
                <Card
                  bodyStyle={{
                    padding: "0.7em",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <div>
                    <span className="flex">
                      <Link className="link" to={`/debate/${debate.id}`}>
                        {debate.name}
                      </Link>
                    </span>
                  </div>
                </Card>
              </div>
            ))}
          </>
        );
      }}
    </Connect>
  );
};

export default DebateListComponent;
