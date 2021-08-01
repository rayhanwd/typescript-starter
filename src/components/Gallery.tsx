import React from 'react';

const Gallery = (props: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined) => {
    return (
        <div>
            {props}
        </div>
    );
};

export default Gallery;