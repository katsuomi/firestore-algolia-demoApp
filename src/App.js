import React, { useState, useEffect } from "react";
import "./App.css";
import SubmitPostComponent from "./components/SubmitPostComponent";
import AllPostsComponent from "./components/AllPostsComponent";
import SearchPostsComponent from "./components/SearchPostsComponent";
import Grid from "@material-ui/core/Grid";
import { db } from "./firebase/firebase";
const algoliasearch = require("algoliasearch");
const client = algoliasearch(
  process.env.REACT_APP_ALGOLIA_ID,
  process.env.REACT_APP_ADMIN_API_KEY
);
const index = client.initIndex("Practice");

const App = () => {
  const [posts, setPosts] = useState([]);
  const [searchResultPosts, setSearchResultPosts] = useState([]);
  useEffect(() => {
    let tempResults = [];
    db.collection("posts")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          tempResults.push({
            title: doc.data().title,
            content: doc.data().content
          });
        });
      });
    setPosts(tempResults);
  }, []);

  const onSubmit = e => {
    e.preventDefault();
    let data = { title: e.target.title.value, content: e.target.content.value };
    db.collection("posts")
      .doc()
      .set(data);
    e.target.title.value = "";
    e.target.content.value = "";
    setPosts(state => [...state, data]);
  };

  const onSearch = e => {
    let tempResults = [];
    index
      .search({
        query: e.target.value
      })
      .then(function(responses) {
        tempResults = responses.hits;
      });
    setSearchResultPosts(tempResults);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <SubmitPostComponent onSubmit={onSubmit} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AllPostsComponent posts={posts} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SearchPostsComponent
            onSearch={onSearch}
            searchResultPosts={searchResultPosts}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
