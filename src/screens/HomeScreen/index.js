import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {Subheading, useTheme} from 'react-native-paper';
import {TabView, TabBar} from 'react-native-tab-view';
import WifiTab from './tabs/WifiTab';
import BuildInfoTab from './tabs/BuildInfoTab';
import StatusTab from './tabs/StatusTab';
import i18n from '../../i18n';
import {relativeWidth} from '../../utils/view-helper';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';

const initialLayout = {width: Dimensions.get('window').width};

const HomeScreen = () => {
  const {colors} = useTheme();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: i18n.t('rootStatus')},
    {key: 'second', title: i18n.t('wifiAdapter')},
    {key: 'third', title: i18n.t('buildInfo')},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'first':
        return <StatusTab />;
      case 'second':
        return <WifiTab />;
      case 'third':
        return <BuildInfoTab />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={[styles.tabBarIndicator, {backgroundColor: colors.ash}]}
      style={{backgroundColor: colors.darkBlueGrey}}
      renderLabel={({route, color}) => (
        <Subheading style={[styles.tabBarLabel, {color}]}>
          {route.title}
        </Subheading>
      )}
      pressColor={colors.ash}
      activeColor={colors.grey}
      inactiveColor={colors.ash}
      scrollEnabled={false}
      tabStyle={{width: relativeWidth(130)}}
    />
  );

  const renderTabs = () => (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );

  return <ScreenWrapper>{renderTabs()}</ScreenWrapper>;
};

const styles = StyleSheet.create({
  tabBarIndicator: {
    height: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  tabBarLabel: {lineHeight: 20, fontSize: 14},
});

export default HomeScreen;
