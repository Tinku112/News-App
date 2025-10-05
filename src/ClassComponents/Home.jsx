import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class Home extends Component {
  constructor() {
    super()
    this.state = {
      totalResults: 0,
      articles: [],
      loading: true
    }
  }

  async getAPIData() {
    const { search, language, q } = this.props;
    const query = search?.trim() ? search : q;

    this.setState({ loading: true });

    try {
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=${language}&apiKey=cf84b85a59fd401a9f20fdd3c2e5bde2`
      );

      const data = await response.json();

      if (data.status === 'ok') {
        this.setState({
          articles: data.articles,
          totalResults: data.totalResults,
          loading: false
        });
      } else {
        console.error("API error:", data);
        this.setState({ loading: false });
      }
    } catch (error) {
      console.error("API Fetch Error:", error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(prevProps) {
    const { search, language, q } = this.props;

    // Only fetch data if any of the relevant props changed
    if (
      prevProps.search !== search ||
      prevProps.language !== language ||
      prevProps.q !== q
    ) {
      this.getAPIData();
    }
  }

  render() {
    const { articles, loading } = this.state;

    return (
      <div className='container-fluid my-3'>
        <h5 className='background text-light p-2 text-center'>
          {this.props.q} News Articles
        </h5>

        {loading ? (
          <p className="text-center mt-3">Loading articles...</p>
        ) : (
          <div className='row'>
            {articles.length > 0 ? (
              articles.map((item, index) => (
                <NewsItem
                  key={index}
                  title={item.title}
                  source={item.source?.name ?? ""}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage || "https://via.placeholder.com/300x180?text=No+Image"}
                  date={item.publishedAt}
                />
              ))
            ) : (
              <p className='text-center mt-3'>No articles found.</p>
            )}
          </div>
        )}
      </div>
    );
  }
}
