import React from 'react';
import {View} from 'react-native';
import {Placeholder, PlaceholderMedia, ShineOverlay} from 'rn-placeholder';

const TodoListPlaceholder = () => {
  return (
    <View style={{margin: 16}}>
      <Placeholder Animation={ShineOverlay}>
        <PlaceholderMedia style={{height: 80, width: '100%', marginTop: 16}} />
        <PlaceholderMedia style={{height: 80, width: '100%', marginTop: 16}} />
        <PlaceholderMedia style={{height: 80, width: '100%', marginTop: 16}} />
        <PlaceholderMedia style={{height: 80, width: '100%', marginTop: 16}} />
        <PlaceholderMedia style={{height: 80, width: '100%', marginTop: 16}} />
        <PlaceholderMedia style={{height: 80, width: '100%', marginTop: 16}} />
        <PlaceholderMedia style={{height: 80, width: '100%', marginTop: 16}} />
      </Placeholder>
    </View>
  );
};

export default TodoListPlaceholder;
