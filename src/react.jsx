import PropTypes from 'prop-types';
import React from 'react';

const description = 'It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
const element = <div>Проверка</div>;

function TestComponent({contactName, contactEmail, icon, img, title}) {
    return (
        <div className="test">
            <h1>{title}</h1>
            <p>
                {description}
                <i className={icon}></i>
            </p>
            {element}
            <img src={img} alt="logo" />
            <div className="class">
                {contactName}
                {contactEmail}
            </div>
        </div>
    );
}

TestComponent.defaultProps = {
    icon: 'src',
    img: 'src',
    title: 'src',
};

TestComponent.propTypes = {
    contactEmail: PropTypes.string,
    contactName: PropTypes.string,
};

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TestComponent />
        );

    }
}


export {
    TestComponent,
    MainComponent,
};


