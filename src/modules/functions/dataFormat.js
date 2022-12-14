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


   const getDay = (input) => {
    if (!input){
      return 
    } else {
     return dateFns.format(new Date(input), "LLL do");
   }};


   const formatDate = (input) => {
     return dateFns.format(new Date(input), "yyyy-MM-dd");
   };

   const getWeek = (input) =>{
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

   const thisWeek = () =>{
    return dateFns.nextSunday(today);
   }

   const overdue = (input) =>{
    return dateFns.isBefore(dateFns.parseISO(input), dateFns.parseISO(formatDate(today)));
  }



  return{
    today,
    getDate,
    getDay,
    getWeek,
    thisWeek,
    formatDate,
    overdue
  }

})();