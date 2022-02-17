import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import 'react-datepicker/dist/react-datepicker.css';

const Wrapper = styled.div`
  width: 40vw;
  border: 1px solid green;
`;

const DatePickerWrap = styled.div`
  display: flex;
  width: 20vw;
  border: 1px solid tomato;
`;

const CalendarWrap = styled.div`
  width: 20vw;
`;

const DatePickerComponent = ({
  dateInput,
  setDateInput,
  isRangeSearch,
  setIsRangeSearch,
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const ChangeStartDateHandler = (date) => {
    setDateInput({
      ...dateInput,
      startDate: date,
    });
    setIsCalendarOpen(false);
    setIsRangeSearch(true);
  };

  const ChangeEndDateHander = (date) => {
    setDateInput({
      ...dateInput,
      endDate: date,
    });
    setIsCalendarOpen(true);
  };

  useEffect(() => {
    setDateInput({
      ...dateInput,
      startDate: dateInput.startDate,
      endDate: dateInput.endDate,
    });
  }, [dateInput.startDate, dateInput.endDate]);

  const CustomInput = ({ value, onClick }) => (
    <CalendarWrap onClick={onClick}>
      {value}
      {isCalendarOpen ? <ArrowDropUp /> : <ArrowDropDown />}
    </CalendarWrap>
  );
  return (
    <Wrapper>
      <DatePickerWrap>
        <ReactDatePicker
          selected={dateInput.startDate}
          onChange={(date) => ChangeStartDateHandler(date)}
          placeholder="StartDate"
          maxDate={new Date()}
          customInput={<CustomInput />}
          dateFormat="yyyy.MM.dd"
          locale={ko}
        />
        {isRangeSearch && (
          <ReactDatePicker
            selected={dateInput.endDate}
            startDate={dateInput.startDate}
            minDate={dateInput.startDate}
            maxDate={new Date()}
            onChange={(date) => ChangeEndDateHander(date)}
            placeholder="EndDate"
            customInput={<CustomInput />}
            dateFormat="yyyy.MM.dd"
            locale={ko}
          />
        )}
      </DatePickerWrap>
    </Wrapper>
  );
};

export default DatePickerComponent;
