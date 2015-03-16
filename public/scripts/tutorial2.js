import React from 'react';
import CommentBox from './components/CommentBox';

React.render(
  <CommentBox url="comments.json" pollInterval={5000} />,
  document.getElementById('content')
);
