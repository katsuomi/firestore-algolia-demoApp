import React, { useMemo } from "react";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const allPostsStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const SearchPostsComponent = props => (
  <>
    <div style={allPostsStyle}>
      <Input
        name="keyword"
        label="全文検索"
        type="text"
        onChange={props.onSearch}
        style={{ width: "250px", marginTop: "10px" }}
      />
      {useMemo(
        () =>
          props.searchResultPosts.map((post, i) => (
            <Card key={i} style={{ marginTop: "20px", width: "250px" }}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          )),
        [props.searchResultPosts]
      )}
    </div>
  </>
);

export default SearchPostsComponent;
