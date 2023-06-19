import react from 'react';

function Posts(){
    return (
        <>
        <div className="post">
<div className="image">
  <img
    src="https://images.openai.com/blob/b4871bfc-8429-4a93-a5a1-66e1dd60e3f8/gpt-4-92586ac_1080p60-poster.jpg?trim=0,0,0,0&width=2600"
    alt=""
  />
</div>
<div className="content">
  <h2>Artificial intelligence</h2>
  <p className="author-info">
    <a className="author">Peter Dury</a>
    <time>2023-06-19 12:45</time>
  </p>
  <p className="post-description">
    The Artificial Intelligence (AI) market value is expected to reach
    nearly $450 billion this year and maintain a year-over-year growth
    rate in the next five years.
  </p>
</div>
</div>
</>
    )
}

export default Posts;