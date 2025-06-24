import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'

const WTC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: selectedDate,
      onChange: (event, date) => {
        if (date) {
          setSelectedDate(date)
        }
      },
      mode: 'date',
      is24Hour: true,
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WTC</Text>
      <Button title="Pick a Date" onPress={showDatePicker} />
      <Text style={styles.selectedDate}>
        Selected Date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}
      </Text>
    </View>
  )
}

export default WTC

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  selectedDate: { marginTop: 20, fontSize: 18 },
})