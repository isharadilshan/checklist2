import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Config from 'react-native-config';
import analytics from '@react-native-firebase/analytics';
import {TestIds, BannerAd, BannerAdSize} from '@react-native-firebase/admob';
import DeviceInfoCard from '../../../../components/organism/DeviceInfoCard';
import {relativeHeight, relativeWidth} from '../../../../utils/view-helper';

const BuildInfoTab = () => {
  return (
    <ScrollView>
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
      <DeviceInfoCard />
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

export default BuildInfoTab;
