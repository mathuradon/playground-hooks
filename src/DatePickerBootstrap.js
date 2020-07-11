import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function DatePickerBootstrap() {
  const [selectedDate, setSelectedDate] = useState();
    return (
    <div className="filterDate" style={{padding: '50px'}}>
      <DatePicker 
      selected={selectedDate} 
      onChange={ date => setSelectedDate( date )} 
      // dateFormat='dd-MM-yyyy'
      // minDate={new Date()}
      // maxDate={new Date()}
      //filter Dates
      // filterDate={date => date.getDay() != 6 && date.getDay() != 0}
      // isClearable
      // showYearDropdown
      // showMonthDropdown
      scrollableMonthYearDropdown
      />
    </div>
    )
}

export default DatePickerBootstrap
