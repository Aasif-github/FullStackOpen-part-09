"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diaries_1 = __importDefault(require("../../data/diaries"));
// const diaries: DiaryEntry[] = diaryData; 
/*
Type '{ id: number; date: string; weather: string; visibility: string; comment: string; }[]' is not assignable to type 'DiaryEntry[]'.
  Type '{ id: number; date: string; weather: string; visibility: string; comment: string; }' is not assignable to type 'DiaryEntry'.
    Types of property 'weather' are incompatible.
      Type 'string' is not assignable to type 'Weather'.ts(2322)
*/
// we need Type Assertion here.
const diaries = diaries_1.default;
// const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>; // also we can write this way
const getEntries = () => {
    return diaries;
};
const addDiary = () => {
    return null;
};
const getNonSensitiveEntries = () => {
    //console.log(diaries);
    return diaries.map(({ id, date, visibility, weather }) => ({
        id,
        date,
        visibility,
        weather
    }));
};
exports.default = {
    getEntries,
    addDiary,
    getNonSensitiveEntries
};
