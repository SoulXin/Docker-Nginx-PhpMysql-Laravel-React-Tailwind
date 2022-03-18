import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container mx-auto">
            <h1 class="text-3xl   underline">
                Hello world!
            </h1>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
