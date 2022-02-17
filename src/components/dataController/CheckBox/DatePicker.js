import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import { ko } from 'date-fns/locale';
import { Wrapper } from '../../../views/shared';
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { setStartDate, setEndDate } from '../../../redux/day';

const DatePickerWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20vw;
  border: 1px solid grey;
  border-radius: 1em;
`;

const CalendarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vw;
`;

const DatePickerComponent = () => {
  registerLocale('ko', ko);

  const dateState = useSelector((state) => state.date.value);
  const dispatch = useDispatch();
  const onHandleStartDate = (date) => {
    dispatch(
      setStartDate({
        startDate: date,
        isCalendarOpen: false,
        isRangeSearch: true,
      })
    );
  };

  const onHandleEndDate = (date) => {
    dispatch(
      setEndDate({
        startDate: dateState.startDate,
        endDate: date,
        isCalendarOpen: true,
        isRangeSearch: true,
      })
    );
  };

  const makeDate = (date) => {
    const toCalendarData = new Date(date);
    return `${toCalendarData.getFullYear()}-${
      toCalendarData.getMonth() + 1
    }-${toCalendarData.getDate()}`;
  };

  const CustomInput = ({ value, onClick }) => (
    <CalendarWrap onClick={onClick}>
      {value}
      {dateState.isCalendarOpen ? <ArrowDropUp /> : <ArrowDropDown />}
    </CalendarWrap>
  );
  return (
    <Wrapper>
      <DatePickerWrap>
        <ReactDatePicker
          selected={dateState.startDate}
          onChange={(date) => onHandleStartDate(date)}
          placeholder="StartDate"
          maxDate={new Date()}
          customInput={<CustomInput />}
          dateFormat="yyyy.MM.dd"
          locale={ko}
        />
        {dateState.isRangeSearch && (
          <ReactDatePicker
            selected={dateState.endDate}
            startDate={dateState.startDate}
            minDate={dateState.startDate}
            maxDate={dateState.endDate}
            onChange={(date) => onHandleEndDate(date)}
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
