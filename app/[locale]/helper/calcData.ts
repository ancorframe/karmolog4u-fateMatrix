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

export const getTableList = (data: OutputData) => {
  const {
    day,
    month,
    year,
    center,
    left2,
    top2,
    left3,
    top3,
    innerLeft,
    innerTop,
    innerBottom,
    innerRight,
    right2,
    right3,
    bottom1,
    bottom2,
    bottom3,
  } = data;
  const result: any = {
    list: [
      {
        chakraName: "Сахасрара",
        physics: day,
        energy: month,
        emotions: "20",
        color: "#E7CFFF",
      },
      {
        chakraName: "Аджна",
        physics: left2,
        energy: top2,
        emotions: "20",
        color: "#C1BFFF",
      },
      {
        chakraName: "Вишудха",
        physics: left3,
        energy: top3,
        emotions: "20",
        color: "#A0E2FF",
      },
      {
        chakraName: "Анахата",
        physics: innerLeft,
        energy: innerTop,
        emotions: "20",
        color: "#B1FFC3",
      },
      {
        chakraName: "Манипура",
        physics: center,
        energy: center,
        emotions: "20",
        color: "#FFFFAB",
      },
      {
        chakraName: "Шаманская чакра / кристалл души",
        physics: innerRight,
        energy: innerBottom,
        emotions: "20",
        color: "#E3E3E3",
      },
      {
        chakraName: "Свадхистана",
        physics: right3,
        energy: bottom3,
        emotions: "20",
        color: "#f8cb82",
      },
      {
        chakraName: "Вместилище Души",
        physics: right2,
        energy: bottom2,
        emotions: "20",
        color: "#FFE39D",
      },
      {
        chakraName: "Муладхара",
        physics: year,
        energy: bottom1,
        emotions: "20",
        color: "#FFA5A5",
      },
    ],
  };
  result.list.forEach(
    (
      { physics, energy }: { physics: number; energy: number },
      index: number,
      array: { emotions: number }[]
    ) => {
      array[index].emotions = checkNum(physics + energy);
    }
  );
  result.physicsTotal = result.list.reduce(
    (acc: number, { physics }: { physics: number }): number => {
      return physics + acc;
    },
    0
  );
  result.physicsTotal = checkNum(result.physicsTotal);

  result.energyTotal = result.list.reduce(
    (acc: number, { energy }: { energy: number }) => {
      return energy + acc;
    },
    0
  );
  result.energyTotal = checkNum(result.energyTotal);

  result.emotionsTotal = result.list.reduce(
    (acc: number, { emotions }: { emotions: number }) => {
      return acc + emotions;
    },
    0
  );
  result.emotionsTotal = checkNum(result.emotionsTotal);

  return result;
};
