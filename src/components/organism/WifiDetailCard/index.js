import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import {Title, Divider} from 'react-native-paper';
import {relativeHeight, relativeWidth} from '../../../utils/view-helper';
import Colors from '../../../theme/colors';
import i18n from '../../../i18n';

const WifiDetailCard = ({wifiInfo}) => {
  return (
    <View style={styles.cardWrapper}>
      <Title style={styles.titleText}>{i18n.t('connectionInfo')}</Title>
      <Divider style={{backgroundColor: Colors.grey}} />
      <View style={styles.textWrapper}>
        <Text style={[styles.textContent, {color: Colors.grey}]}>
          <Text>SSID: </Text> <Text>{wifiInfo?.ssid}</Text>
        </Text>
        <Text style={[styles.textContent, {color: Colors.grey}]}>
          <Text>BSSID: </Text> <Text>{wifiInfo?.bssid}</Text>
        </Text>
        <Text style={[styles.textContent, {color: Colors.grey}]}>
          <Text>Frequency : </Text>{' '}
          <Text>
            {wifiInfo?.frequency}
            {'GHz'}
          </Text>
        </Text>
        <Text style={[styles.textContent, {color: Colors.grey}]}>
          <Text>IP: </Text> <Text>{wifiInfo?.ip}</Text>
        </Text>
      </View>
    </View>
  );
};

WifiDetailCard.propTypes = {
  wifiInfo: PropTypes.object,
};

const styles = StyleSheet.create({
  cardWrapper: {
    elevation: 4,
    borderRadius: relativeWidth(10),
    padding: relativeWidth(16),
    marginTop: relativeHeight(100),
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

export default WifiDetailCard;
