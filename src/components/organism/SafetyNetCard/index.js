import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View, StyleSheet} from 'react-native';
import {relativeHeight, relativeWidth} from '../../../utils/view-helper';
import Colors from '../../../theme/colors';
import i18n from '../../../i18n';

const SafetyNetCard = ({deviceInfo}) => {
  return (
    <View style={styles.cardWrapper}>
      <Image
        style={styles.imgStyles}
        source={require('../../../assets/images/safetynet.png')}
      />
      <View style={styles.textWrapper}>
        <Text style={styles.safetyNetText}>{i18n.t('safetyNet')}</Text>
        {deviceInfo?.jailBroken ? (
          <Text style={styles.isPassedText}>{i18n.t('failed')}</Text>
        ) : (
          <Text style={[styles.isPassedText, {color: Colors.green}]}>
            {i18n.t('passed')}
          </Text>
        )}
      </View>
    </View>
  );
};

SafetyNetCard.propTypes = {
  deviceInfo: PropTypes.object,
};

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: 'row',
    elevation: 4,
    borderRadius: relativeWidth(10),
    padding: relativeWidth(16),
    marginBottom: relativeHeight(100),
    minWidth: relativeWidth(330),
    maxWidth: relativeWidth(350),
    backgroundColor: Colors.backgroundDark,
  },
  imgStyles: {
    height: relativeWidth(80),
    width: relativeWidth(80),
  },
  textWrapper: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: relativeHeight(20),
  },
  safetyNetText: {
    fontSize: 18,
    lineHeight: 30,
    color: Colors.grey,
    textAlign: 'center',
    alignSelf: 'center',
  },
  isPassedText: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '900',
    marginVertical: relativeHeight(10),
    color: Colors.red,
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default SafetyNetCard;
