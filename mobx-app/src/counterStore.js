//states
import { observable, action } from 'mobx';

let appState = observable({
    count: 0,
    get getCount() {
        return this.count;
    },
    decCounter:action.bound(function() {
        this.count -= 1;
    }),
    incCounter:action.bound(function() {
        this.count += 1;
    })
})

export default appState;