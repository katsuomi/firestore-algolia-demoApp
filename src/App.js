import React, { Component } from 'react';
import './App.css';
import SubmitPostComponent from "./components/SubmitPostComponent"
import AllPostsComponent from "./components/AllPostsComponent"
import SearchPostsComponent from "./components/SearchPostsComponent"
import Grid from '@material-ui/core/Grid';
import { db } from './firebase/firebase'
const algoliasearch = require('algoliasearch')
const client = algoliasearch(process.env.REACT_APP_ALGOLIA_ID, process.env.REACT_APP_ADMIN_API_KEY)
const index = client.initIndex('Practice')

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this)
    this.ReadPosts = this.ReadPosts.bind(this)
    this.onSearch = this.onSearch.bind(this)
    this.state = {
      posts: [],
      search_result_posts: []
    }
  }

  componentDidMount(){
    this.ReadPosts()
  }

  onSubmit(e){
    e.preventDefault()
    let data = {title: e.target.title.value,content: e.target.content.value}
    db.collection("posts").doc().set(data)
    e.target.title.value = ""
    e.target.content.value = ""
    this.ReadPosts()
  }

  async ReadPosts(){
    let temp_results = []
    await db.collection("posts")
    .get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        temp_results.push({title: doc.data().title,content: doc.data().content})
      });
    });
    this.setState({posts: temp_results})
  }

  async onSearch(e){
    let temp_results = []
    await index
    .search({
      query: e.target.value
    })
    .then(function(responses){
      temp_results = responses.hits
    })

    this.setState({search_result_posts: temp_results})
  }


  render(){
    return(
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <SubmitPostComponent onSubmit={this.onSubmit}/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AllPostsComponent posts={this.state.posts} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SearchPostsComponent onSearch={this.onSearch} search_result_posts={this.state.search_result_posts} />
        </Grid>
      </Grid>
    )
  }
}

export default App;