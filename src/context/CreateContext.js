import React, {useReducer, createContext} from 'react';
import PropTypes from 'prop-types';

export default (reducer, action, defaultValue) => {
  const Context = createContext();

  const Provider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};

    for (const key in action) {
      boundActions[key] = action[key](dispatch);
    }

    return (
      <Context.Provider value={{state, ...boundActions}}>
        {children}
      </Context.Provider>
    );
  };

  Provider.propTypes = {
    children: PropTypes.node,
  };

  return {Context, Provider};
};
