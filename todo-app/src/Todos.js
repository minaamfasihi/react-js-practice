import React from 'react';

import { observer } from 'mobx-react';

class Todos extends React.Component {
    render() {
        return(
            <section>
                Hello World
            </section>
        )
    }
}

export default observer(Todos);