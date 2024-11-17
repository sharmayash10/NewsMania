import React from 'react'

export default function NewsItem(props) {
  let {title, description, imageUrl, url} = props;
  return (
    <div>
      <div className="card my-2">
          <img src={imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={url} target='_blank' className="btn btn-primary">Read More</a>
          </div>
      </div>
    </div>
  )
}