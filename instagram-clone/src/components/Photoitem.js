import React from 'react';
import { observer } from 'mobx-react';
import { NavLink } from "react-router-dom";

class PhotoItem extends React.Component {
    render() {
        const { mobxgramStoreItem, incrementLikes } = this.props;
        return(
            <section className="col-md-4 text-center">
                <section className="thumbnail">
                    <img src={mobxgramStoreItem.imageLinks} alt="" className="img-thumbnail" />
                    <h2>
                        {mobxgramStoreItem.name}
                    </h2>
                    <footer className="photoitem__footer clearfix">
                        <div>
                            <NavLink to={`/${mobxgramStoreItem.name}-${mobxgramStoreItem.id}`}>
                                <i className="fa fa-comments"></i>
                                <span>{mobxgramStoreItem.comments.length}</span>
                            </NavLink>
                            <i onClick={() => {

                            }} className="fa fa-thumbs-up"></i>
                            <span>{mobxgramStoreItem.likes}</span>
                        </div>
                    </footer>
                </section>
            </section>
        )
    }
}

export default observer(PhotoItem);