//states
import { extendObservable, action } from 'mobx';

class AppState {
    constructor() {
        extendObservable(this, {
            count: 0,
            get getCount() {
                return this.count;
            },

            decCounter:action(() => {
                this.count -= 1;
            }),

            incCounter:action(() => {
                this.count += 1;
            })
        });
    }
}

export default new AppState();