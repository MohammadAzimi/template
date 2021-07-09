import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import DatePicker, {getFormatedDate} from 'react-native-modern-datepicker';

const CalendarScreen = ({}) => {
  const [selectedDate, setSelectedDate] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text>Calender</Text>
      <Text>{selectedDate}</Text>
      <DatePicker
        isGregorian={true}
        options={{
          // defaultFont: 'Shabnam-Light',
          // headerFont: 'Shabnam-Medium',
          backgroundColor: '#090C08',
          textHeaderColor: '#FFA25B',
          textDefaultColor: '#F6E7C1',
          selectedTextColor: '#fff',
          mainColor: '#F4722B',
          textSecondaryColor: '#D6C7A1',
          borderColor: 'rgba(122, 146, 165, 0.1)',
        }}
        onSelectedChange={(date) => setSelectedDate(date)}
        // selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')}
        selected={getFormatedDate(new Date(), 'YYYY/MM/DD')}
        // current="2019-07-13"
        minimumDate="2020-02-17"
        maximumDate="2021-07-25"
        mode="calendar"
        minuteInterval={30}
        style={{borderRadius: 20, overflow: 'visible'}}
      />
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: 'white',
  },
});
