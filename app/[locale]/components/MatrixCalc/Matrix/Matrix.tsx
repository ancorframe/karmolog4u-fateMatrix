import Image from "next/image";
import style from "./Matrix.module.css";
import { OutputData } from "@/app/[locale]/helper/calcData";
import Img from "@/public/assets/images/matrix.svg";

const Matrix = ({ matrixData }: { matrixData: OutputData }) => {
  return (
    <div>
      <div className={style.matrix_container}>
        <Image
          src={Img}
          alt="матрица"
          fill
          sizes="(max-width: 768px) 100%, (max-width: 1279.9px) 400px, (min-width: 1280px) 1000px"
        />
        <span>{matrixData.day}</span>
        <span>{matrixData.month}</span>
        <span>{matrixData.year}</span>
        <span>{matrixData.bottom1}</span>
        <span>{matrixData.center}</span>
        <span>{matrixData.bottom3}</span>
        <span>{matrixData.bottom2}</span>
        <span>{matrixData.top3}</span>
        <span>{matrixData.top2}</span>
        <span>{matrixData.left3}</span>
        <span>{matrixData.left2}</span>
        <span>{matrixData.right3}</span>
        <span>{matrixData.right2}</span>
        <span>{matrixData.innerTop}</span>
        <span>{matrixData.innerLeft}</span>
        <span>{matrixData.innerRight}</span>
        <span>{matrixData.innerBottom}</span>
      </div>
    </div>
  );
};

export default Matrix;
