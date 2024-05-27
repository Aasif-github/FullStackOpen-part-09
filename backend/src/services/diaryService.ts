import diaryData from '../../data/diaries';
import { NewDiaryEntry, NonSensitiveDiaryEntry, DiaryEntry,Weather, Visibility } from '../types';

// const diaries: DiaryEntry[] = diaryData; 
/*
Type '{ id: number; date: string; weather: string; visibility: string; comment: string; }[]' is not assignable to type 'DiaryEntry[]'.
  Type '{ id: number; date: string; weather: string; visibility: string; comment: string; }' is not assignable to type 'DiaryEntry'.
    Types of property 'weather' are incompatible.
      Type 'string' is not assignable to type 'Weather'.ts(2322)
*/
// we need Type Assertion here.
const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>; // also we can write this way

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const addDiary = (
  date:string, 
  weather:Weather, 
  visibility:Visibility,
  comment:string): NewDiaryEntry => {
  
  const newDiaryEntry = {

    id: Math.max(...diaries.map(d => d.id)) + 1,
    date,
    weather,
    visibility,
    comment
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  //console.log(diaries);
  return diaries.map(({ id, date, visibility, weather }) => ({
    id,
    date,
    visibility,
    weather
  }));
}

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);

  return entry;
}

export default {
  getEntries,
  addDiary,
  getNonSensitiveEntries,
  findById
};