import { extendObservable, action } from "mobx";
import sampleStore from "./sampleStore";
import axios from 'axios';

class Mobxgram {
    constructor() {
        extendObservable(this, {
            mobxgramList: [],
            getStore: action(() => {
                this.mobxgramList.replace(sampleStore);
            }),
            addPhoto: action(newPhoto => {
                this.mobxgramList = this.mobxgramList.concat(newPhoto);
            }),
            incrementLikes: action((index) => {
                var selectedListItem = this.mobxgramList[index];

                var newValue = {
                    ...selectedListItem,
                    likes: selectedListItem.likes + 1
                }

                this.mobxgramList = [
                    ...this.mobxgramList.slice(0, index),
                    newValue,
                    ...this.mobxgramList.slice(index + 1)
                ]
                var ROOTURL = "/db.json";
                axios.put(ROOTURL + "/" + newValue.id, newValue);
            }),
            addComments: action(({ index, author, text }) => {
                let mobxgramList = this.mobxgramList.slice();
                let selectedPhotoItem = mobxgramList[index];
                selectedPhotoItem.comments = [
                    ...selectedPhotoItem.comments,
                    {
                        author,
                        text
                    }
                ]
                this.mobxgramList.replace(mobxgramList);
            })
        })
    }
}

export default new Mobxgram();