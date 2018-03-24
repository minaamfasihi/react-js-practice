import React from 'react';
import { observer, inject } from 'mobx-react';
import PhotoItem from "./Photoitem";
import { NavLink } from 'react-router-dom';

class MobxgramList extends React.Component {
    render() {
        const { mobxgramStore } = this.props;
        return(
            <section className="row">
                <section className="col-md-10 col-md-offset-1">
                    <section>
                        <NavLink to="/add_photo" className="btn btn-addphoto btn-default">
                            Add Photo
                        </NavLink>
                    </section>
                    {
                        mobxgramStore.mobxgramList.map((mobxgramStoreItem, index) => {
                            return <PhotoItem 
                                incrementLikes={mobxgramStore.incrementLikes} 
                                key={mobxgramStoreItem.id} 
                                mobxgramStoreItem={mobxgramStoreItem}
                                index={index} 
                                />
                        })
                    }
                </section>
            </section>
        )
    }
}

export default inject("mobxgramStore")(observer(MobxgramList));
