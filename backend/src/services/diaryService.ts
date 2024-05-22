import diaryData from '../../data/diaries';

import { DiaryEntry } from '../types';

// const diaries: DiaryEntry[] = diaryData; 
/*
Type '{ id: number; date: string; weather: string; visibility: string; comment: string; }[]' is not assignable to type 'DiaryEntry[]'.
  Type '{ id: number; date: string; weather: string; visibility: string; comment: string; }' is not assignable to type 'DiaryEntry'.
    Types of property 'weather' are incompatible.
      Type 'string' is not assignable to type 'Weather'.ts(2322)
*/
// we need Type Assertion here.
// const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>; // also we can write this way

const getEntries = ():DiaryEntry[] => {
  return diaries;
};

const addDiary = () => {
  return null;
};

export default {
  getEntries,
  addDiary
};