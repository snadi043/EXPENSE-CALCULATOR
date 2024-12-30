
// const inputDate = {
//   parse(value) {
//   if (typeof value === 'number') {
//       return new Date(value)
//   }
//    else if (typeof value === 'string') {
//     // Assume dd/mm/yyyy date format
//     return new Date(
//       value.replace(/(\d\d)\/(\d\d)\/(\d{4})/, (full, d, m, y) => `${y}-${m}-${d}T12:00:00.000z`)
//     )
//   }
//   return value ? new Date(Date.parse(value)) : null
// }
// }


export function getFormattedDate(inputDate) {
  // if(typeof inputDate === 'string'){
  //   return new Date(
  //     value.replace(/(\d\d)\/(\d\d)\/(\d{4})/, (full, d, m, y) => `${y}-${m}-${d}T12:00:00.000z`)
  //   )
    return inputDate?.toISOString().slice(0, 10);
  }
  // }

export function day7DaysAgo(inputDate, days){
  return new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate() - days);
}