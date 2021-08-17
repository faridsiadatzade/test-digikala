import React from 'react';
import "./style.scss";

const Loading = ({ display }) => (
    <div style={{display : display ? 'flex' : 'none'}}>
        <div className="loader"></div>
    </div>
//   <div style={{
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'rgba(255,255,255, 0.7)',
//     zIndex: 9999999,
//     display: display ? 'flex' : 'none',
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//     paddingTop: '200px'
//   }}>
//     <IoRefreshOutline />
//   </div>
)

export default Loading;
