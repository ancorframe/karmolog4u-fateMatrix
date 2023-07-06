"use client";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import style from "./DataInput.module.css";
import {
  OutputData,
  calculatedMatrixData,
} from "@/app/[locale]/helper/calcData";

interface Props {
  setShowMatrix: (value: boolean) => void;
  setMatrixData: (value: OutputData) => void;
}
type FormValues = {
  data: string;
};

const DataInput = ({ setShowMatrix, setMatrixData }: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormValues>();
  const t = useTranslations("Matrix");

  const onChange = (e: { target: { value: string } }) => {
    let inputDate = e.target.value.replace(/\D/g, "");
    if (inputDate.length > 8) {
      inputDate = inputDate.substring(0, 8);
    }
    if (inputDate.length > 4) {
      inputDate = inputDate.substring(0, 4) + "." + inputDate.substring(4);
    }
    if (inputDate.length > 2) {
      inputDate = inputDate.substring(0, 2) + "." + inputDate.substring(2);
    }
    setValue("data", inputDate);
  };

  const onFormSubmit = (values: FormValues): void => {
    const [day, month, year] = values.data.split(".");
    setShowMatrix(true);
    const result: OutputData = calculatedMatrixData({
      day: +day,
      month: +month,
      year: +year,
    });
    setMatrixData(result);
  };
  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={style.form}>
      <input
        type="text"
        className={style.form__input}
        id="name"
        placeholder="Дата"
        {...register("data", {
          onChange: onChange,
          required: { value: true, message: t("dataInputTequired") },
          pattern: {
            value: /^\d{2}\.\d{2}\.\d{4}$/,
            message: "Введите дату в формате dd.mm.yyyy",
          },
        })}
      />
      <label htmlFor="name" className={style.form__label}>
        Дата
      </label>
      <button type="submit" className={style.submitBtn}>
        {t("calculate")}
      </button>
    </form>
  );
};

export default DataInput;
