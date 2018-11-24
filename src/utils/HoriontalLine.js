import React from 'react';
const HozizontalLine = ({ color , width , height }) => (
    <hr
        style={{
            color: (color ? color : 'black'),
            backgroundColor: (color ? color : 'black'),
            height: (height ? height : '0.25rem'),
            width: (width ? width : "2rem"),
        }}
    />
);

export default HozizontalLine;
