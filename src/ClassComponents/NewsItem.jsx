import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className='col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3'>
                <div className="card">
                    <img src={this.props.pic} height={160} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <div className='source'>
                                <p>{this.props.source} </p>
                                <p>{new Date(this.props.date).toLocaleDateString()}</p>
                            </div>
                            <p className="card-text">{this.props.description}</p>
                            <a href={this.props.url} target='_blank' className="btn btn-primary w-100 background">Read Full Article</a>
                        </div>
                </div> 
            </div>
        )
    }
}
