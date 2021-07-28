import React from 'react';

const Loader = () => {
    return (
        <React.Fragment>
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </React.Fragment>
    );
}

export default Loader;