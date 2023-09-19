import React, { Component } from 'react'

export class NewsItem extends Component {
  render(props) {
    const {title,description,imageUrl,newsUrl} = this.props;
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target='blank' className="btn btn-sm btn-primary">Go somewhere</a>
        </div>
      </div>
    )
  }
}

export default NewsItem