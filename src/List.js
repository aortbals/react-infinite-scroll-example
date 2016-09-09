import React, { Component } from 'react';
import './List.css';
import InfiniteScroll from './InfiniteScroll';

const style = {
  item(i) {
    return {
      padding: '2rem',
      fontSize: '2rem',
      backgroundColor: i % 2 === 0 ? '#fff': '#d0ebff',
    };
  },
};

let offset = 0;
let size = 5;

class List extends Component {
  state = {
    items: [1, 2, 3, 4, 5]
  }

  loadMore = () => {
    this.setState({ isLoading: true });

    // Simulate a delay
    this.timeout = setTimeout(() => {
      offset += size;
      this.setState({
        items: [
          ...this.state.items,
          ...[1, 2, 3, 4, 5].map(i => i + offset)
        ],
        isLoading: false,
      });
    }, 500);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  handleScrollToBottom = () => this.loadMore()
  handleLoadMoreClick = () => this.loadMore()

  render() {
    const { items, isLoading } = this.state;

    return (
      <InfiniteScroll onScrollToBottom={this.handleScrollToBottom}>
        {items.map(i =>
          <div key={i} style={style.item(i)}>{i}</div>
        )}

        <button
          className="List-load-more-button"
          onClick={this.handleLoadMoreClick}
          disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load more'}
        </button>
      </InfiniteScroll>
    );
  }
}

export default List;
