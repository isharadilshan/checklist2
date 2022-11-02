import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import Config from 'react-native-config';
import crashlytics from '@react-native-firebase/crashlytics';
import DeviceInfo from 'react-native-device-info';
import _ from 'lodash';
import JailMonkey from 'jail-monkey';
import analytics from '@react-native-firebase/analytics';
import {TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import RootStatusCard from '../../../../components/organism/RootStatusCard';
import SafetyNetCard from '../../../../components/organism/SafetyNetCard';
import {relativeWidth} from '../../../../utils/view-helper';

const StatusTab = () => {
  const [deviceInfo, setDeviceInfo] = useState({});
  const [isRefresh, setIsRefresh] = useState(false);

  useEffect(() => {
    getDeviceInfo();
  }, [getDeviceInfo]);

  const getDeviceInfo = useCallback(async () => {
    try {
      const appName = await DeviceInfo.getModel();
      const baseOS = await DeviceInfo.getSystemName();
      const osVersion = await DeviceInfo.getSystemVersion();
      const apiLevel = await DeviceInfo.getApiLevel();
      const jailBroken = JailMonkey.isJailBroken();
      setDeviceInfo({
        appName: appName,
        baseOS: baseOS,
        osVersion: osVersion,
        apiLevel: apiLevel,
        jailBroken: jailBroken,
      });
    } catch (e) {
      crashlytics().recordError(e);
    }
  }, []);

  const onRecheck = async () => {
    setIsRefresh(true);
    _.delay(() => {
      getDeviceInfo();
      setIsRefresh(false);
    }, 2000);
    await analytics().logEvent('RECHECK', {
      deviceInfo: deviceInfo,
    });
  };

  return (
    <View style={styles.contentWrapper}>
      <RootStatusCard
        deviceInfo={deviceInfo}
        isRefresh={isRefresh}
        onPressRecheck={onRecheck}
      />
      <SafetyNetCard deviceInfo={deviceInfo} />
      <BannerAd
        unitId={Config.ADMOB_BANNER_UNIT || TestIds.BANNER}
        size={BannerAdSize.ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdFailedToLoad={async error =>
          await analytics().logEvent('ADVERT_LOADED_FAILED', {
            description: 'Advert loading failed',
            error: error,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'center',
    marginHorizontal: relativeWidth(16),
  },
});

export default StatusTab;
