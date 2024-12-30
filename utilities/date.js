
export function getFormattedDate(inputDate) {
    return inputDate?.toISOString().slice(0, 10);
  }

export function day7DaysAgo(inputDate, days){
  return new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate() - days);
}