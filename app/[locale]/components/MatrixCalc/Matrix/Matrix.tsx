"use client";
import { useEffect } from "react";
import Image from "next/image";
import style from "./Matrix.module.css";
import { OutputData } from "@/app/[locale]/helper/calcData";
import Img from "@/public/assets/images/matrix2.svg";

const Matrix = ({ matrixData }: { matrixData: OutputData }) => {
  useEffect(() => {
    const section = document.getElementById(`matrix`);
    if (section) {
      const topOffset = section.offsetTop - 100;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  }, []);
  return (
    <div style={{ margin: "0 auto 40px" }} id="matrix">
      <div className={style.matrix_container}>
        <Image
          src={Img}
          alt="матрица"
          fill
          sizes="(max-width: 768px) 100%, (max-width: 1279.9px) 400px, (min-width: 1280px) 1000px"
        />
        <span className={`${style.matrix_text} ${style.day}`}>
          {matrixData.day}
        </span>
        <span className={`${style.matrix_text} ${style.month}`}>
          {matrixData.month}
        </span>
        <span className={`${style.matrix_text} ${style.year}`}>
          {matrixData.year}
        </span>
        <span className={`${style.matrix_text} ${style.bottom1}`}>
          {matrixData.bottom1}
        </span>
        <span className={`${style.matrix_text} ${style.center}`}>
          {matrixData.center}
        </span>
        <span className={`${style.matrix_text} ${style.bottom3}`}>
          {matrixData.bottom3}
        </span>
        <span className={`${style.matrix_text} ${style.bottom2}`}>
          {matrixData.bottom2}
        </span>
        <span className={`${style.matrix_text} ${style.top3}`}>
          {matrixData.top3}
        </span>
        <span className={`${style.matrix_text} ${style.top2}`}>
          {matrixData.top2}
        </span>
        <span className={`${style.matrix_text} ${style.left3}`}>
          {matrixData.left3}
        </span>
        <span className={`${style.matrix_text} ${style.left2}`}>
          {matrixData.left2}
        </span>
        <span className={`${style.matrix_text} ${style.right3}`}>
          {matrixData.right3}
        </span>
        <span className={`${style.matrix_text} ${style.right2}`}>
          {matrixData.right2}
        </span>
        <span className={`${style.matrix_text} ${style.innerTop}`}>
          {matrixData.innerTop}
        </span>
        <span className={`${style.matrix_text} ${style.innerLeft}`}>
          {matrixData.innerLeft}
        </span>
        <span className={`${style.matrix_text} ${style.innerRight}`}>
          {matrixData.innerRight}
        </span>
        <span className={`${style.matrix_text} ${style.innerBottom}`}>
          {matrixData.innerBottom}
        </span>
      </div>
    </div>
  );
};

export default Matrix;
