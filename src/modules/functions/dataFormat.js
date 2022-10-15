import * as dateFns from 'date-fns'

export const dateFormat = (() => {

  const getDate = (input) => dateFns.format(new Date(input), "LLL do, yyyy");

  return{
    getDate
  }

})();