import React from 'react';
import classes from './CoreLayout.scss';
import '../../styles/core.scss';

/*
This file will contain the global layout, so this would be
a good place to include a header or a footer component.
 */
export const CoreLayout = ({children}) => (
  <div className='container text-center'>
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
