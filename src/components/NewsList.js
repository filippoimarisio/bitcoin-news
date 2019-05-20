import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchNews} from '../actions/fetchNews'


class NewsList extends Component {

  componentDidMount() {
    this.props.fetchNews()
  }

  render() {

    const news = this.props.news

    return (
      <div>

      </div>
    );
  }
}

const mapStateToProps = ({news}) => {
  console.log(news)
  return news
}

export default connect(mapStateToProps, {fetchNews})(NewsList);
