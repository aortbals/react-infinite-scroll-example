## React Infinite Scroll

This is an example of a basic React `InfiniteScroll` component.

The API is simple. It accepts a prop function, `onScrollToBottom`, that will be called when the user scrolls below a given threshold. The threshold can be provided via the `offsetBottomThreshold` prop, and the default is 400px.

A common use case is to fire an asynchronous action from `onScrollToBottom` to load additional data.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
