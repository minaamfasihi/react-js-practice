import React from 'react';
import { inject, observer } from 'mobx-react';
import { extendObservable, action } from 'mobx';

class AddPhoto extends React.Component {
    constructor() {
        super();

        this.addPhotoLocalState = extendObservable(this, {
            name: "",
            changeName: action(event => {
                this.name = event.target.value;
            }),
            imageLinks: "",
            changeImageLink: action(event => {
                this.imageLinks = event.target.value;
            }),
            resetForm: action(() => {
                this.name = "";
                this.imageLinks = "";
            })
        });
    }

    addPhotoToStore = (event) => {
        event.preventDefault();
        const { resetForm, name, imageLinks } = this.addPhotoLocalState;

        this.props.mobxgramStore.addPhoto({
            name: name,
            imageLinks: imageLinks,
            likes: 0,
            comments: []
        });
        this.addPhotoLocalState.resetForm();
    };

    render() {
        const { name, changeName, imageLinks, changeImageLink } = this.addPhotoLocalState;
        return (
            <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                            id="name" 
                            placeholder="Enter Name" 
                            type="text" 
                            className="form-control"
                            value={name}
                            onChange={changeName} 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="link">Photo Link</label>
                            <input
                            id="link"
                            placeholder="Enter Link"
                            value={imageLinks}
                            onChange={changeImageLink}
                            type="text" 
                            className="form-control" 
                            />
                        </div>
                        <button className="btn btn-primary" type="submit">Add Photo</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default inject("mobxgramStore")(observer(AddPhoto));