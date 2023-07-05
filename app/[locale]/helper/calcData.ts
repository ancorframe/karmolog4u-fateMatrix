export function checkNum(num: number) {
  if (+num > 22) {
    return String(num)
      .split("")
      .reduce((acc, number) => {
        return acc + +number;
      }, 0);
  }
  return +num;
}

interface DateObject {
  day: number;
  month: number;
  year: number;
}
export interface OutputData extends DateObject {
  bottom1?: number;
  center?: number;
  bottom3?: number;
  bottom2?: number;
  top3?: number;
  top2?: number;
  left3?: number;
  left2?: number;
  right3?: number;
  right2?: number;
  innerTop?: number;
  innerLeft?: number;
  innerRight?: number;
  innerBottom?: number;
}

export const calculatedMatrixData = (date: DateObject): OutputData => {
  const data: OutputData = {
    day: checkNum(date.day),
    month: checkNum(date.month),
    year: checkNum(checkNum(date.year)),
  };

  data.bottom1 = checkNum(data.day + data.month + data.year);
  data.center = checkNum(data.day + data.month + data.year + data.bottom1);
  data.bottom3 = checkNum(data.center + data.bottom1);
  data.bottom2 = checkNum(data.bottom3 + data.bottom1);
  data.top3 = checkNum(data.center + data.month);
  data.top2 = checkNum(data.month + data.top3);
  data.left3 = checkNum(data.center + data.day);
  data.left2 = checkNum(data.day + data.left3);
  data.right3 = checkNum(data.year + data.center);
  data.right2 = checkNum(data.year + data.right3);
  data.innerTop = checkNum(data.center + data.top3);
  data.innerLeft = checkNum(data.center + data.left3);
  data.innerRight = checkNum(data.center + data.right3);
  data.innerBottom = checkNum(data.center + data.bottom3);
  return data;
};
