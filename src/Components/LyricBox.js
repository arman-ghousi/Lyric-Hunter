import React from 'react';


const LyricBox = (props) => {
    return (
        <div id="lyric-container">
            <pre>
                {props.content}
            </pre>
        </div>
    );
}


export default LyricBox;
