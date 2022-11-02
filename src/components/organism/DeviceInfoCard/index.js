import React, {useEffect, useState, useCallback} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useTheme} from 'react-native-paper';
import crashlytics from '@react-native-firebase/crashlytics';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';
import _ from 'lodash';
import {relativeHeight, relativeWidth} from '../../../utils/view-helper';

const DeviceInfoCard = () => {
  const {colors} = useTheme();
  const [deviceInfo, setDeviceInfo] = useState({});

  useEffect(() => {
    getDeviceInfo();
  }, [getDeviceInfo]);

  const getDeviceInfo = useCallback(async () => {
    try {
      const baseOS = await DeviceInfo.getSystemName();
      const osVersion = await DeviceInfo.getSystemVersion();
      const apiLevel = await DeviceInfo.getApiLevel();
      const buildId = await DeviceInfo.getBuildId();
      const bootLoader = await DeviceInfo.getBootloader();
      const brand = await DeviceInfo.getBrand();
      const carrier = await DeviceInfo.getCarrier();
      const device = await DeviceInfo.getDevice();
      const deviceId = await DeviceInfo.getDeviceId();
      const display = await DeviceInfo.getDisplay();
      const firstInstalledTime = await DeviceInfo.getFirstInstallTime();
      const lastUpdateTime = await DeviceInfo.getLastUpdateTime();
      const fingerPrint = await DeviceInfo.getFingerprint();
      const freeDiskStorage = await DeviceInfo.getFreeDiskStorage();
      const totalDiskCapacity = await DeviceInfo.getTotalDiskCapacity();
      const hardware = await DeviceInfo.getHardware();
      const host = await DeviceInfo.getHost();
      const ipAddress = await DeviceInfo.getIpAddress();
      const macAddress = await DeviceInfo.getMacAddress();
      const manufacturer = await DeviceInfo.getManufacturer();
      const serialNumber = await DeviceInfo.getSerialNumber();
      const securityPatch = await DeviceInfo.getSecurityPatch();
      const totalMemory = await DeviceInfo.getTotalMemory();
      const usedMemory = await DeviceInfo.getUsedMemory();
      const maxMemory = await DeviceInfo.getMaxMemory();
      const userAgent = await DeviceInfo.getUserAgent();
      const supportedAbis = await DeviceInfo.supportedAbis();
      const systemAvailableFeatures =
        await DeviceInfo.getSystemAvailableFeatures();
      const availableLocationProviders =
        await DeviceInfo.getAvailableLocationProviders();

      setDeviceInfo({
        baseOS: baseOS,
        osVersion: osVersion,
        apiLevel: apiLevel,
        buildId: buildId,
        bootLoader: bootLoader,
        brand: brand,
        carrier: carrier,
        device: device,
        deviceId: deviceId,
        display: display,
        firstInstalledTime: firstInstalledTime,
        lastUpdateTime: lastUpdateTime,
        fingerPrint: fingerPrint,
        freeDiskStorage: freeDiskStorage,
        totalDiskCapacity: totalDiskCapacity,
        hardware: hardware,
        host: host,
        ipAddress: ipAddress,
        macAddress: macAddress,
        manufacturer: manufacturer,
        serialNumber: serialNumber,
        securityPatch: securityPatch,
        totalMemory: totalMemory,
        usedMemory: usedMemory,
        maxMemory: maxMemory,
        userAgent: userAgent,
        supportedAbis: supportedAbis, //array
        systemAvailableFeatures: systemAvailableFeatures, //array
        availableLocationProviders: availableLocationProviders,
      });
    } catch (e) {
      crashlytics().recordError(e);
    }
  }, []);

  return (
    <View style={{marginHorizontal: 16}}>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>BASE OS:</Text>{' '}
        <Text>{_.get(deviceInfo, 'baseOS', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>OS Version: </Text>{' '}
        <Text>{_.get(deviceInfo, 'osVersion', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>API Level:</Text>{' '}
        <Text>{_.get(deviceInfo, 'apiLevel', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Build ID:</Text>{' '}
        <Text>{_.get(deviceInfo, 'buildId', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Boot Loader:</Text>{' '}
        <Text>{_.get(deviceInfo, 'bootLoader', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Brand:</Text> <Text>{_.get(deviceInfo, 'brand', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Carrier:</Text>{' '}
        <Text>{_.get(deviceInfo, 'carrier', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Device:</Text>{' '}
        <Text>{_.get(deviceInfo, 'device', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Device ID:</Text>{' '}
        <Text>{_.get(deviceInfo, 'deviceId', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Display:</Text>{' '}
        <Text>{_.get(deviceInfo, 'display', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>First Installed:</Text>{' '}
        <Text>{moment(deviceInfo?.firstInstalledTime).format('LLLL')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Last Updated:</Text>{' '}
        <Text>{moment(deviceInfo?.lastUpdateTime).format('LLLL')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Finger Print:</Text>{' '}
        <Text>{_.get(deviceInfo, 'fingerPrint', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Free Disk Storage:</Text>{' '}
        <Text>
          {_.get(deviceInfo, 'freeDiskStorage', null) / (1024 * 1024)}
          {' MB'}
        </Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Total Disk Capacity:</Text>{' '}
        <Text>
          {_.get(deviceInfo, 'totalCapacity', null) / (1024 * 1024)}
          {' MB'}
        </Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Hardware:</Text>{' '}
        <Text>{_.get(deviceInfo, 'hardware', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Host:</Text> <Text>{_.get(deviceInfo, 'host', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>IP Address:</Text>{' '}
        <Text>{_.get(deviceInfo, 'ipAddress', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>MAC Address:</Text>{' '}
        <Text>{_.get(deviceInfo, 'macAddress', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Serial Number:</Text>{' '}
        <Text>{_.get(deviceInfo, 'serialNumber', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Security Patch:</Text>{' '}
        <Text>{_.get(deviceInfo, 'securityPatch', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Total Memory:</Text>{' '}
        <Text>
          {deviceInfo?.totalMemory / (1024 * 1024)}
          {' MB'}
        </Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Used Memory:</Text>{' '}
        <Text>
          {deviceInfo?.usedMemory / (1024 * 1024)}
          {' MB'}
        </Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Max Memory:</Text>{' '}
        <Text>
          {deviceInfo?.maxMemory / (1024 * 1024)}
          {' MB'}
        </Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>User Agent:</Text>{' '}
        <Text>{_.get(deviceInfo, 'userAgent', 'unknown')}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Supported ABI's:</Text>{' '}
        <Text>{_.get(deviceInfo, 'supportedAbis', []).toString()}</Text>
      </Text>
      <Text style={[styles.textContent, {color: colors.grey}]}>
        <Text>Device Available features:</Text>{' '}
        {/* <Text>
          {_.get(deviceInfo, 'systemAvailableFeatures', []).toString()}
        </Text> */}
      </Text>

      {_.get(deviceInfo, 'systemAvailableFeatures', []).map(
        (feature, index) => {
          return (
            <Text id={index} style={[styles.textContent, {color: colors.grey}]}>
              <Text>{feature}</Text>
            </Text>
          );
        },
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    elevation: 4,
    borderRadius: relativeWidth(4),
    padding: relativeWidth(16),
    maxWidth: relativeWidth(350),
    maxHeight: relativeHeight(500),
  },
  textContent: {
    margin: 6,
    fontWeight: '600',
    fontSize: 15,
  },
});

export default DeviceInfoCard;
