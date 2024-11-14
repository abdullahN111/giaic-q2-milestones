import Styles from './BtnMain.module.css'

const BtnMain = ({label = "Resume Abd."}) => {
  return (
    <a
    href="https://resumeabd.vercel.app/"
    className={Styles.projectBtn}
  >
    <p className={`${Styles.btnMain} ${Styles.btnPrimary}`}>
      {label}
    </p>
  </a>
  )
}

export default BtnMain