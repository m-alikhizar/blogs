import React from 'react';
import { connect } from 'react-redux';
import { element, oneOfType, arrayOf, object } from 'prop-types';
import NavigationHeaderBar from '../../components/NavigationHeaderBar'

const Main = ({ children }) => (
    <div>
        <NavigationHeaderBar />
        <section>
            <div className="container">
                {children}
            </div>
        </section>
    </div>
);

Main.propTypes = {
    children: oneOfType([arrayOf(element), object]).isRequired,
};

export default connect()(Main);
