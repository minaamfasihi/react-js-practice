import React from 'react';
import { observer, inject } from 'mobx-react';
import PhotoItem from "./Photoitem";

class MobxgramList extends React.Component {
    render() {
        const { mobxgramStore } = this.props;
        return(
            <section className="row">
                <section className="col-md-10 col-md-offset-1">
                    {
                        mobxgramStore.mobxgramList.map((mobxgramStoreItem) => {
                            return <PhotoItem incrementLikes={mobxgramStore.incrementLikes} key={mobxgramStoreItem.id} mobxgramStoreItem={mobxgramStoreItem} />
                        })
                    }
                </section>
            </section>
        )
    }
}

export default inject("mobxgramStore")(observer(MobxgramList));
