import * as dateFns from 'date-fns'

export const dateFormat = (() => {

  Date.prototype.addDays = function(days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

  const today = new Date();


  const getDate = (input) => {
    if (!input){
      return 
    } else {
     return dateFns.format(new Date(input), "LLL do, yyyy");
   }};


   const formatDate = (input) => {
     return dateFns.format(new Date(input), "yyyy-MM-dd");
   };


   const getWeek = (input) =>{   //Should filter the days
    if (!input){
      return 
    } else {
      let i = 0;
      while (formatDate(today.addDays(i)) != formatDate(dateFns.nextMonday(today))){
        if (input == formatDate(today.addDays(i))){
          return true;
        }
        i++;
      }
    }
   };

  return{
    today,
    getDate,
    getWeek,
    formatDate
  }

})();