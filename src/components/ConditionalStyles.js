import React from 'react';

class ConditionalStyles extends React.Component {
    render() {
        return (
            <div style={{ color: Math.random() < 0.5 ? 'green' : 'red' }}>Do you like colors?</div>
        );
    }
}

export default ConditionalStyles;