import React from 'react';

import { Network } from '../network';
import { CardList, Navbar } from '../Components';

export default function SelectMenu(props) {
    const restId = parseInt(props.match.params.restId);
    return (
        <div>
            <Navbar title="Choose a menu" />
            {Network.getMenus(restId).length
                ? <CardList data={Network.getMenus(restId)} />
                : <CardList data={[
                    {
                        id: "",
                        title: "Please Check Back Later",
                        img: "https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/500-internal-server-error-featured-image-1.png",
                    }
                  ]}/>
            }
        </div>
    )
}