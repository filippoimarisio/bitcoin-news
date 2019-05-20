import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchNews} from '../actions/fetchNews';
import { CircularProgress, Typography} from '@material-ui/core';
import NewsCard from './NewsCard';
import './NewsList.css'


class NewsList extends Component {

  componentDidMount() {
    this.props.fetchNews()
  }

  render() {

    if (!this.props.news.articles) {
      return (
        <div>
          <CircularProgress />{' '}
          <Typography>Loading today's stories...</Typography>
        </div>
      )
    }

    const articles = this.props.news.articles

    return (
      <div>
        <ul>
          { articles.map(article => {
            return (
              <li key={article.url}>
                <NewsCard article={article}/>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({news}) => {
  console.log('NEWS',news.articles)
  return {news}
}

export default connect(mapStateToProps, {fetchNews})(NewsList);
