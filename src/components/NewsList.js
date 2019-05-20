import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchNews} from '../actions/fetchNews'
import {
  CircularProgress,
  Typography,
} from '@material-ui/core'


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
                {article.title}
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
