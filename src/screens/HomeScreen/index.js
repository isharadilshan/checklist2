import React, {useCallback, useState, useEffect} from 'react';
import _ from 'lodash';
import {StyleSheet, SectionList, View} from 'react-native';
import {FAB, Searchbar, Title, useTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import TextField from '../../components/atoms/TextField';
import CreateModal from '../../components/modals/CreateModal';
import EditModal from '../../components/modals/EditModal';
import TodoListItem from '../../components/organism/TodoListItem';
import TodoListPlaceholder from '../../components/organism/TodoListPlaceholder';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import {createTodoItem} from '../../redux/actions/todo';
import {getDateName} from '../../utils/helper/Date';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [todosN, setTodosN] = useState([]);

  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(true);
  const [isDescending, setIsDescending] = useState(true);
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState({});
  const [searchText, setSearchText] = useState('');
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const todoList = useSelector(({todo}) => todo?.todoList);

  const onCreateTodo = async (values) => {
    const data = {
      id: '123e4567-e89b-12d3-a456-426614174000',
      title: values.title,
      description: values.description,
      createTime: 1667108328,
      updateTime: Date.now(),
    };
    await dispatch(createTodoItem(data));
    closeCreateModal();
  };

  console.log('DATE NOW ---------------------------', typeof Date.now());

  const fetchTodos = useCallback(async () => {
    try {
      setIsFetching(true);
      setTodos([]);
      setIsFetching(false);
      setIsRefreshing(false);
    } catch (e) {
      // error
      setIsFetching(false);
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const refreshList = () => {
    setIsRefreshing(true);
    setTodos([]);
    fetchTodos();
  };

  const handleSearch = (text) => {
    setSearchText(text);
  };

  useEffect(() => {
    updateToDos();
  }, [updateToDos]);

  const updateToDos = useCallback(() => {
    if (!searchText && isDescending) {
      return null;
    }
  }, [isDescending, searchText]);

  const filterTodos = () => {
    if (!searchText) {
      return todos;
    }

    const items = todos.filter((data) => {
      if (
        data?.displayName.toLowerCase().includes(searchText.toLowerCase()) ||
        data?.price.toString().toLowerCase().includes(searchText.toLowerCase())
      ) {
        return data;
      }
    });

    return items;
  };

  const closeCreateModal = () => {
    setCreateModalVisible(false);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
  };

  const onPressCreateToDo = () => {
    setCreateModalVisible(true);
  };

  const onPressEditToDo = () => {
    setSelectedTodo();
    setEditModalVisible(true);
  };

  const onPressSort = () => {
    setIsDescending(!isDescending);
  };

  return (
    <ScreenWrapper noPaddings>
      <View style={styles.searchWrapper}>
        <TextField
          render={(props) => (
            <Searchbar
              {...props}
              placeholder={'Search'}
              style={{backgroundColor: colors.grey}}
              onChangeText={handleSearch}
              clearIcon={() => (
                <Icon
                  name={isDescending ? 'sort-amount-desc' : 'sort-amount-asc'}
                  size={20}
                  color={'black'}
                  onPress={onPressSort}
                />
              )}
            />
          )}
        />
      </View>

      <CreateModal
        isModalVisible={createModalVisible}
        closeModal={closeCreateModal}
        onCreate={onCreateTodo}
      />

      <EditModal
        isModalVisible={editModalVisible}
        closeModal={closeEditModal}
        onEdit={onPressEditToDo}
        todo={selectedTodo}
      />

      <SectionList
        sections={_.chain(todoList)
          .groupBy(getDateName)
          .map((value, key) => ({title: key, data: value}))
          .value()}
        keyExtractor={(item, index) => item + index}
        renderItem={(item) => (
          <TodoListItem {...item} onEdit={onPressEditToDo} />
        )}
        refreshing={isRefreshing}
        onRefresh={refreshList}
        ListEmptyComponent={() => {
          if (isRefreshing || isFetching) {
            return <TodoListPlaceholder />;
          }
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Title style={[styles.text, {color: colors.mattGreen}]}>
                {'No Todos Found'}
              </Title>
            </View>
          );
        }}
        renderSectionHeader={({section: {title}}) => (
          <Title style={styles.sectionTitle}>{title}</Title>
        )}
      />

      <FAB icon="plus" style={styles.fab} onPress={onPressCreateToDo} />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {margin: 16},
  sectionTitle: {
    marginHorizontal: 16,
    marginVertical: 20,
    color: '#00b300',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HomeScreen;
