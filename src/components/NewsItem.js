import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {let {title,description,imgUrl,newsUrl,author,publishedAt,source}=this.props;
    return (
      <div><div className="card" style={{width: "18rem", margin:"auto"}}>
        {/* eslint-disable-next-line */}
      <img src={imgUrl?imgUrl:"default.jpg"} className="card-img-top" alt="Image not found"/>
      <div className="card-body">
      <span className="position-absolute top-0  translate-middle badge  bg-danger" style={{left:"85%"}}>
    {source}
    <span className="visually-hidden">unread messages</span>
  </span>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
        <a href={newsUrl} className="btn btn-sm btn-info">Read More</a>
      </div>
    </div></div>
    )
  }
}