import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, StyleSheet} from 'react-native';
import _ from 'lodash';
import Button from '../../atoms/Button';
import {relativeHeight, relativeWidth} from '../../../utils/view-helper';
import Colors from '../../../theme/colors';
import i18n from '../../../i18n';

const RootStatusCard = ({deviceInfo, isRefresh, onPressRecheck}) => {
  return (
    <View style={styles.cardWrapper}>
      <View style={styles.textRow}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.deviceNameText}>
            {i18n.t('your')}{' '}
            <Text style={{fontWeight: '900'}}> {deviceInfo?.appName} </Text>
          </Text>
          {deviceInfo?.jailBroken ? (
            <Text style={styles.isRootedText}>{i18n.t('rooted')}</Text>
          ) : (
            <Text style={[styles.isRootedText, {color: Colors.warnText}]}>
              {i18n.t('notRooted')}
            </Text>
          )}
          <Text style={styles.descriptionText}>
            {`OS: ${deviceInfo?.baseOS} ${deviceInfo?.osVersion} (SDK ${deviceInfo?.apiLevel})`}
          </Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <Button
          label={i18n.t('recheck')}
          onPress={onPressRecheck}
          style={styles.recheckBtn}
          loading={isRefresh}
          disabled={isRefresh}
        />
      </View>
    </View>
  );
};

RootStatusCard.propTypes = {
  deviceInfo: PropTypes.object,
  isRefresh: PropTypes.bool,
  onPressRecheck: PropTypes.func,
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
  textRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: relativeHeight(30),
  },
  deviceNameText: {
    fontSize: 18,
    lineHeight: 30,
    color: Colors.grey,
  },
  isRootedText: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '900',
    marginVertical: relativeHeight(10),
    color: Colors.red,
  },
  descriptionText: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '600',
    color: Colors.grey,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  recheckBtn: {
    backgroundColor: Colors.green,
    width: relativeWidth(140),
  },
});

export default RootStatusCard;
