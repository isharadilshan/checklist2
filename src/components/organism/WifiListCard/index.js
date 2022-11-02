import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import {Title, Divider} from 'react-native-paper';
import {relativeHeight, relativeWidth} from '../../../utils/view-helper';
import Colors from '../../../theme/colors';
import i18n from '../../../i18n';

const WifiListCard = ({wifiList}) => {
  return (
    <View style={styles.cardWrapper}>
      <Title style={styles.titleText}>{i18n.t('availableConnections')}</Title>
      <Divider style={{backgroundColor: Colors.grey}} />
      <View style={styles.textWrapper}>
        {wifiList.map((connection, index) => {
          return (
            <Text
              key={index}
              style={[styles.textContent, {color: Colors.grey}]}>
              <Text>SSID: </Text> <Text>{connection?.SSID}</Text>
            </Text>
          );
        })}
      </View>
    </View>
  );
};

WifiListCard.propTypes = {
  wifiList: PropTypes.array,
};

const styles = StyleSheet.create({
  cardWrapper: {
    elevation: 4,
    borderRadius: relativeWidth(10),
    padding: relativeWidth(16),
    marginVertical: relativeHeight(32),
    minWidth: relativeWidth(330),
    maxWidth: relativeWidth(350),
    backgroundColor: Colors.backgroundDark,
  },
  titleText: {
    color: Colors.grey,
  },
  textWrapper: {
    justifyContent: 'center',
    margin: relativeHeight(20),
  },
  textContent: {
    margin: 6,
    fontWeight: '600',
    fontSize: 15,
    color: Colors.grey,
  },
});

export default WifiListCard;
