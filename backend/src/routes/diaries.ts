import express from 'express';
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.post('/', (req, res) => {
    
  const {date, weather, visibility, comment} = req.body;
    
    const addedEntry = diaryService.addDiary(
      date,
      weather,
      visibility,
      comment,
    );

    res.json(addedEntry);
});

// api/diaries/:id
router.get('/:id', (req, res) => {
  let id:number = Number(req.params.id);
  const diary = diaryService.findById(id);
  if(diary){
    return res.send(diary);
  }
  return res.sendStatus(404);
})

export default router;