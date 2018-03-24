import React from 'react';
import PhotoItem from './Photoitem';
import { observer, inject } from 'mobx-react';

class PhotoDetails extends React.Component {
    constructor(props) {
        super(props);

        let id = props.match.params.imageName.split("-").pop();
        this.photoIndex = props.mobxgramStore.mobxgramList.findIndex((mobxgramListItem) => {
            return parseInt(mobxgramListItem.id, 10) === parseInt(id, 10)
        })
    }

    render() {
        const { mobxgramStore } = this.props;
        return(
            <section className="row">
                <section className="col-md-8 col-md-offset-4">
                    <div className="row">
                        <PhotoItem
                        incrementLikes={mobxgramStore.incrementLikes}
                        index={this.photoIndex}
                        mobxgramStoreItem={mobxgramStore.mobxgramList[this.photoIndex]}
                        />
                        <div className="col-sm-8">
                            <section className="photodetails">
                                <ul>
                                    {
                                        mobxgramStore.mobxgramList[this.photoIndex].comments.map((commentsItem) => {
                                            return <li>
                                                <div>{commentsItem.author}</div>
                                                <div>{commentsItem.text}</div>
                                            </li>
                                        })
                                    }
                                </ul>
                                <form onSubmit={(e) => {
                                    e.preventDefault();
                                    mobxgramStore.addComments( { 
                                        index: this.photoIndex, 
                                        author: this.refs.author.value,
                                        text: this.refs.comments.value
                                    })
                                    this.refs.author.value = "";
                                    this.refs.comments.value = "";
                                }}>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            ref="author"
                                            className="form-control"
                                            id="exampleInputEmail"
                                            placeholder="name" 
                                            />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">
                                            Comments
                                        </label>
                                        <input
                                            type="text"
                                            ref="comments"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                            placeholder="comments" 
                                            />
                                    </div>
                                    <button type="submit" className="btn btn-default">
                                        Submit
                                    </button>
                                </form>
                            </section>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default inject("mobxgramStore")(observer(PhotoDetails));