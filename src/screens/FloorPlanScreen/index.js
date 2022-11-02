import React, {useState, useReducer} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import FloorPlan from '../../assets/svg/FloorPlan';
import FloorCordinateModal from '../../components/modals/FloorCordinateModal';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';

const initialCordinates = {
  xCordinate: 0,
  yCordinate: 0,
};

const FloorPlanScreen = () => {
  const [cordinateModalVisible, setCordinateModalVisible] = useState(false);
  const [cordinates, setCordinates] = useReducer((state, newState) => {
    return {...state, ...newState};
  }, initialCordinates);

  const onPressSvg = ({nativeEvent}) => {
    setCordinateModalVisible(true);
    setCordinates({
      xCordinate: nativeEvent.locationX,
      yCordinate: nativeEvent.locationY,
    });
  };

  return (
    <ScreenWrapper noPaddings>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FloorPlan onPress={onPressSvg} />
      </ScrollView>
      {cordinateModalVisible && (
        <FloorCordinateModal
          isModalVisible={cordinateModalVisible}
          closeModal={() => setCordinateModalVisible(false)}
          cordinates={cordinates}
        />
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
  },
});

export default FloorPlanScreen;
