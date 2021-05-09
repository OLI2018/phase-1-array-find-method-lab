
  function superbowlWin(record)
  {
   const resultWin = record.find(record => record.result==='W');
   if(!!resultWin)
   {
     return resultWin.year;
   }
  }
