import React from 'react';
import { StatusBar, Platform, Image } from 'react-native';
import moment from 'moment';
import { COLORS, STRINGS } from '../config'; 

const calculatePercent = (data, total) => (data / total) * 100;

export const setStatusBar = (color, barSyle = 'dark-content') => {
  if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor(color || COLORS.white, true);
  }
  StatusBar.setBarStyle(barSyle, true);
};

export const getNavigationIcon = (dimensions, icon) => {
  return <Image style={{ width: dimensions.width, height: dimensions.height }} source={icon} />;
};

const createMonth = monthLabel => {
  return {
    label: monthLabel,
    isSelected: false,
    items: [
      {
        microRegion: undefined,
        volume: undefined,
        tax: undefined
      }
    ]
  };
};

export const getMonthIdByName = month => {
  switch (month) {
    case 'JAN':
      return '01';
    case 'FEV':
      return '02';
    case 'MAR':
      return '03';
    case 'ABR':
      return '04';
    case 'MAI':
      return '05';
    case 'JUN':
      return '06';
    case 'JUL':
      return '07';
    case 'AGO':
      return '08';
    case 'SET':
      return '09';
    case 'OUT':
      return '10';
    case 'NOV':
      return '11';
    case 'DEZ':
      return '12';
    default:
      return '00';
  }
};

export const getMonthByIndex = monthIndex => {
  switch (monthIndex) {
    case '01':
      return 'Janeiro';
    case '02':
      return 'Fevereiro';
    case '03':
      return 'Março';
    case '04':
      return 'Abril';
    case '05':
      return 'Maio';
    case '06':
      return 'Junho';
    case '07':
      return 'Julho';
    case '08':
      return 'Agosto';
    case '09':
      return 'Setembro';
    case '10':
      return 'Outubro';
    case '11':
      return 'Novembro';
    case '12':
      return 'Dezembro';
    default:
      return '--';
  }
};

export const getListOfYears = () => {
  const startDate = new Date(`01 July 2000`);
  const firstYear = startDate.getFullYear();

  const finalDate = new Date(`01 May 2040`);
  const secondYear = finalDate.getFullYear();
  const arr = Array();

  for (let i = firstYear; i <= secondYear; i++) {
    arr.push([
      createMonth('JANEIRO'),
      createMonth('FEVEREIRO'),
      createMonth('MARÇO'),
      createMonth('ABRIL'),
      createMonth('MAIO'),
      createMonth('JUNHO'),
      createMonth('JULHO'),
      createMonth('AGOSTO'),
      createMonth('SETEMBRO'),
      createMonth('OUTUBRO'),
      createMonth('NOVEMBRO'),
      createMonth('DEZEMBRO')
    ]);
  }

  return arr;
};

export const getCurrentYearIndex = () => {
  const currentYear = new Date().getFullYear().toString();
  return parseInt(currentYear.substr(currentYear.length - 2), 10);
};

export const getYearUsingIndex = yearIndex => {
  return yearIndex < 10 ? `200${yearIndex}` : `20${yearIndex}`;
};

export const getMonthNumber = monthIndex => {
  return monthIndex < 10 ? `0${monthIndex}` : monthIndex;
};

export const getFullYear = yearIndex => {
  return yearIndex < 10 ? `200${yearIndex}` : `20${yearIndex}`;
};

export const isRailRoad = saleType => {
  return saleType.id === 1;
};

export const getNumber = item => {
  if (!item || item.length === 0) return 0;
  if (item[item.length - 1] === ',') item = item.substr(0, item.length - 1);
  return Number(item.replace(',', '.'));
};

export const yearListToMonthYearSale = (yearsList, salesType, isGetPattern) => {
  const monthYear = [];

  yearsList.forEach((year, yearIndex) => {
    year.forEach((month, monthIndex) => {
      if (!month.isSelected) return;

      const microregions = [];
      month.items.forEach(item => {
        if (!item.tax || item.tax.length === 0 || !item.volume || item.volume.length === 0) return;
        microregions.push({
          tax: getNumber(item.tax),
          volume: getNumber(item.volume),
          idStatusType: item.idStatusType,
          microregion: item.microRegion,
          monthYearMicroregionId: item.monthYearMicroregionId
        });
      });

      if (microregions.length === 0) return;

      const newItem = {
        monthYear: {
          description: `${getMonthNumber(monthIndex + 1)}/${getFullYear(yearIndex)}`
        }
      };

      if (isGetPattern) {
        newItem.monthYear.microregion = microregions.map(item => {
          let newId;
          // handling with a backend issue
          if (item.microRegion) newId = item.microRegion.id;
          if (item.microregion) newId = item.microregion.id;
          return {
            id: isRailRoad(salesType) ? newId : undefined,
            tax: item.tax,
            volume: item.volume,
            idStatusType: item.idStatusType
          };
        });
      } else {
        newItem.monthYear.monthYearMicroregion = microregions;
      }

      monthYear.push(newItem);
    });
  });

  return monthYear;
};

export const normalizeNumber = number => {
  return Number.isInteger(number) ? number : number.toFixed(2);
};

export const getPeriodByYear = (prevPeriod, prevMonth, nextMonth) => {
  let fullPeriod = '';
  if (prevPeriod) {
    const indexPrev = Number(getMonthIdByName(prevMonth.substring(0, 3)));
    const indexNext = Number(getMonthIdByName(nextMonth.substring(0, 3)));
    if (indexNext - 1 === indexPrev) {
      const month = prevPeriod.split(',');
      if (prevPeriod === prevMonth || month[month.length - 1] === prevMonth) {
        fullPeriod = `${prevPeriod} - ${nextMonth}`;
      } else {
        fullPeriod = prevPeriod.replace(prevMonth, nextMonth);
      }
    } else {
      fullPeriod = `${prevPeriod}, ${nextMonth}`;
    }
  } else {
    fullPeriod = prevPeriod;
  }
  return fullPeriod;
};

export const getCapacityCardColorBackground = (isActive, isFirst) => {
  if (isActive && isFirst) return COLORS.capacityCard;
  if (isActive) return COLORS.white;
  if (isFirst) return COLORS.capacityCardLight;

  return COLORS.capacityCardLightness;
};

export const getCapacityCardColorBorder = (isActive, isFirst) => {
  if (isActive && isFirst) return COLORS.primary;
  if (isActive) return COLORS.yellow;
  if (isFirst) return COLORS.capacityCardLight;
  return COLORS.capacityCardLightness;
};

export const getCapacityCardStringText = position => {
  if (position === 0) return STRINGS.query.vol;
  if (position === 1) return STRINGS.query.rol;
  return STRINGS.query.tax;
};

export const getCapacityCardColorText = (isActive, isFirst) => {
  if (isActive) return COLORS.black;
  if (isFirst) return COLORS.primary;
  return COLORS.yellow;
};

export const convertStatusSelectedToObj = (statusSelected, statusList) => {
  let newSelectedStatusList = [];
  let newStatusSelectedName = '';
  if (statusSelected.id[0] === -1) {
    newSelectedStatusList = statusList;
  } else {
    newStatusSelectedName = statusSelected.name.split(',');
    statusSelected.id.forEach((item, index) => {
      newSelectedStatusList.push({ id: item, name: newStatusSelectedName[index] });
    });
  }
  return newSelectedStatusList;
};

export const formatItems = ITEMS => {
  const data = [];
  Object.keys(ITEMS).forEach((value, index) => {
    data.push({ label: ITEMS[value], value: index + 1, index });
  });

  return data;
};

export const formatItemsToFilter = items => {
  return {
    id: items.map(item => item.id),
    name: items
      .map((item, index) => {
        if (index === 0) {
          return item.name;
        }
        return ` ${item.name}`;
      })
      .join()
  };
};

export const isDateFromToday = date => {
  return date ? moment(date).isSame(new Date(), 'day') : false;
};

export const atob = (input = '') => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  const str = input.replace(/=+$/, '');
  let output = '';

  if (str.length % 4 == 1) {
    throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (
    let bc = 0, bs = 0, buffer, i = 0;
    (buffer = str.charAt(i++));
    ~buffer && ((bs = bc % 4 ? bs * 64 + buffer : buffer), bc++ % 4)
      ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
      : 0
  ) {
    buffer = chars.indexOf(buffer);
  }

  return output;
};

export const btoa = input => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  const str = String(input);
  let output = '';
  for (
    let block, charCode, idx = 0, map = chars;
    str.charAt(idx | 0) || ((map = '='), idx % 1);
    output += map.charAt(63 & (block >> (8 - (idx % 1) * 8)))
  ) {
    charCode = str.charCodeAt((idx += 3 / 4));
    if (charCode > 0xff) {
      throw new InvalidCharacterError(
        "'btoa' failed: The string to be encoded contains characters outside of the Latin1 range."
      );
    }
    block = (block << 8) | charCode;
  }
  return output;
};

export const parseJwt = token => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function(c) {
        return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
      })
      .join('')
  );
  return JSON.parse(jsonPayload);
};

export const checkXSS = text => {
  const re = /(\b)(on\S+)(\s*)=|javascript|(<\s*)(\/*)script/gi;
  return re.test(text) ? text.replace(re, '') : text;
};

export const formatCurrency = (value = 0, currency = 'BRL', locale = 'pt-BR') =>
  new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

export const getPeriodFlow = fullNewPeriod => {
    let period = '';
    const selectedPeriod = [];
  
    fullNewPeriod.sort((a, b) => {
      return new Date(a) - new Date(b);
    });
  
    fullNewPeriod.forEach(item => {
      const shortPeriod = moment(item)
        .format('L')
        .split('/');
      if (!selectedPeriod[shortPeriod[2]]) {
        selectedPeriod[shortPeriod[2]] = [];
      }
      selectedPeriod[shortPeriod[2]].push(shortPeriod);
    });
  
    selectedPeriod.forEach((itemYear, indexYear) => {
      let fullPeriod = '';
      itemYear.forEach((item, index) => {
        const newItem = getMonthByIndex(item[1]).toUpperCase();
        if (index > 0) {
          const prevItem = itemYear[index - 1];
          const prevNewItem = getMonthByIndex(prevItem[1]).toUpperCase();
          fullPeriod = getPeriodByYear(fullPeriod, prevNewItem, newItem);
        } else {
          fullPeriod = newItem;
        }
      });
      period = period ? `${period}\n${fullPeriod} (${indexYear})` : `${fullPeriod} (${indexYear})`;
    });
    return period;
  };
