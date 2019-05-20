import * as request from "superagent";
import {APIKey} from '../APIKey'

export const FETCH_NEWS = 'FETCH_NEWS'

const newsUrl = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-20&sortBy=publishedAt&apiKey='
console.log('TEST', `${newsUrl}${APIKey}`)

export const fetchNews = () => dispatch => {
  request
    .get(`${newsUrl}${APIKey}`)
    .then(response =>
      dispatch({
      type: FETCH_NEWS,
      payload: response.body
    })
  )
  .catch(err => alert(err));
}
