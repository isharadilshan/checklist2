import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import Button from '../../components/atoms/Button';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import {setUserAuthenticated, setUserInfo} from '../../redux/actions/user';
import store from '../../redux/store';
import {signout} from '../../services/auth';

const ProfileScreen = () => {
  const userInfo = useSelector(({user}) => user?.userInfo);

  console.log('USER INFO ----------------------', userInfo);

  const onPressSignOut = async () => {
    try {
      await signout();
      store.store.dispatch(setUserAuthenticated(true));
      store.store.dispatch(setUserInfo({}));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScreenWrapper noPaddings>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.profileImage}
          source={{
            uri: 'https://picsum.photos/id/237/200/200',
          }}
        />
        <View style={{marginVertical: 40}}>
          <Button
            icon={({size, color}) => (
              <Icon name="power-off" size={20} color="white" />
            )}
            label={'Sign Out'}
            onPress={onPressSignOut}
            contentStyle={styles.signoutButton}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  signoutButton: {
    backgroundColor: '#e76372',
  },
});

export default ProfileScreen;
