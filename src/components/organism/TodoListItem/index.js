import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {
  Surface,
  IconButton,
  useTheme,
  Title,
  Subheading,
} from 'react-native-paper';

const TodoListItem = ({item, onEdit, onDelete}) => {
  const {colors} = useTheme();

  // console.log('ITEm ------------------', moment(item.createTime).format('DD'));
  // console.log('ITEM ------------------', item);

  return (
    <Surface style={styles.surface}>
      <View style={styles.cardLeft}>
        <Title>{item?.title}</Title>
        <Subheading>{item?.description}</Subheading>
      </View>

      <View style={styles.cardRight}>
        <IconButton icon="square-edit-outline" size={25} onPress={onEdit} />
        <IconButton icon="trash-can" size={25} onPress={onDelete} />
      </View>
    </Surface>
  );
};

TodoListItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

const styles = StyleSheet.create({
  surface: {
    flexDirection: 'row',
    elevation: 4,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#BBC8D6',
  },
  cardLeft: {
    flex: 1,
  },
  cardRight: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
});

export default TodoListItem;
