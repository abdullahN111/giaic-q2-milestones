import Styles from "./BtnMain.module.css";

const BtnMain = ({ label = "" }) => {
  return (
    <p
      className={`${Styles.btnMain} ${Styles.btnPrimary} ${Styles.projectBtn}`}
    >
      {label}
    </p>
  );
};

export default BtnMain;
