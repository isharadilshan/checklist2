import React, {useEffect, useCallback, useState} from 'react';
import {
  Platform,
  PermissionsAndroid,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Config from 'react-native-config';
import analytics from '@react-native-firebase/analytics';
import {TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import WifiManager from 'react-native-wifi-reborn';
import {relativeHeight, relativeWidth} from '../../../../utils/view-helper';
import RNSpeedometer from 'react-native-speedometer';
import i18n from '../../../../i18n';
import {desibleToQuality} from '../../../../utils/misc';
import Colors from '../../../../theme/colors';
import WifiDetailCard from '../../../../components/organism/WifiDetailCard';
import WifiListCard from '../../../../components/organism/WifiListCard';

const labels = [
  {
    id: 1,
    name: 'Too Slow',
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  },
  {
    id: 2,
    name: 'Very Slow',
    labelColor: '#ff5400',
    activeBarColor: '#ff5400',
  },
  {
    id: 3,
    name: 'Slow',
    labelColor: '#f4ab44',
    activeBarColor: '#f4ab44',
  },
  {
    id: 4,
    name: 'Normal',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f',
  },
  {
    id: 5,
    name: 'Normal',
    labelColor: '#14eb6e',
    activeBarColor: '#14eb6e',
  },
  {
    id: 6,
    name: 'Fast',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b',
  },
];

const WifiTab = () => {
  const [wifiInfo, setWifiInfo] = useState({});
  const [wifiList, setWifiList] = useState([]);
  const [wifiStrength, setWifiStrength] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Logs every minute');
      getUserPermission();
    }, 1000);

    return () => clearInterval(interval);
  }, [getUserPermission]);

  const getUserPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: i18n.t('locationPermissionTitle'),
          message: i18n.t('locationPermissionMessage'),
          buttonNegative: i18n.t('deny'),
          buttonPositive: i18n.t('allow'),
        },
      );
      if (
        granted === PermissionsAndroid.RESULTS.GRANTED &&
        Platform.OS === 'android'
      ) {
        try {
          const wifiList = await WifiManager.loadWifiList();
          const ssid = await WifiManager.getCurrentWifiSSID();
          const bssid = await WifiManager.getBSSID();
          const signalStrength = await WifiManager.getCurrentSignalStrength();
          const frequency = await WifiManager.getFrequency();
          const ip = await WifiManager.getIP();

          const data = {
            ssid: ssid,
            bssid: bssid,
            signalStrength: signalStrength,
            frequency: frequency,
            ip: ip,
          };
          const strength = desibleToQuality(signalStrength);
          setWifiStrength(strength);
          setWifiList(wifiList);
          setWifiInfo(data);
        } catch (e) {
          crashlytics().recordError(e);
        }
      }
    } else {
      return;
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contentWrapper}>
      <RNSpeedometer
        value={wifiStrength}
        labels={labels}
        size={relativeWidth(320)}
        labelStyle={{color: Colors.backgroundDark}}
        innerCircleStyle={{
          backgroundColor: Colors.blueGrey,
          width: relativeWidth(250) * 0.6,
          height: relativeWidth(125) * 0.6,
        }}
      />
      <WifiDetailCard wifiInfo={wifiInfo} />
      <WifiListCard wifiList={wifiList} />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    alignItems: 'center',
    marginHorizontal: relativeWidth(16),
    paddingTop: relativeHeight(32),
  },
});

export default WifiTab;
