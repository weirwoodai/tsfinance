export interface Period {
  start: string;
  end?: Period['start'];
}
export const isValidPeriod = (period: Period): boolean => {
  const { start, end } = period;
  if (!end) return start !== '';
  const startDate = new Date(start);
  const endDate = new Date(end);
  return startDate.getTime() > endDate.getTime();
};
