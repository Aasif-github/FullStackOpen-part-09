import { NewDiaryEntry } from "./types"; 

// Type Guards

const parseComment = (comment: unknown): string => {

    if (!comment || !isString(comment)) {
      throw new Error('Incorrect or missing comment');
    }
  
    return comment;
};

const isString = (text:unknown): text is string => {
    
    return typeof text === 'string' || text instanceof String;
}


//unknown is the ideal type for our kind of situation of input validation
const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {

    const newEntry:NewDiaryEntry = {
        weather: 'cloudy', // fake the return value
        visibility: 'great',
        date: '2022-1-1',
        comment: 'fake news'
    }

    return newEntry;
}

export default toNewDiaryEntry;