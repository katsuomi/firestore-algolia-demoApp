import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const allPostsStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const AllPostsComponent = props => (
  <React.Fragment>
    <div style={allPostsStyle}>
      {props.posts.map((post, i) => (
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
      ))}
    </div>
  </React.Fragment>
);

export default AllPostsComponent;
