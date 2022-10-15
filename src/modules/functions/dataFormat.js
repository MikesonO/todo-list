import * as dateFns from 'date-fns'

export const dateFormat = (() => {

  const getDate = (input) => {
    if (!input){
      return 
    } else {
     return dateFns.format(new Date(input), "LLL do, yyyy")
   }};

  return{
    getDate
  }

})();