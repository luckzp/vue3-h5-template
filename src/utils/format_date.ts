import dayjs from "dayjs";

export function formatMonthDay(date: Date) {
  return dayjs(date).format("MM月DD日");
}

export function getDiffDays(startDate: Date, endDate: Date) {
    return dayjs(endDate).diff(startDate, "day")
  }