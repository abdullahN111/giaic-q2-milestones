import Styles from './BtnMain.module.css'

const BtnMain = ({label = "Resume Abd.",}) => {
  return (
   
    <p className={`${Styles.btnMain} ${Styles.btnPrimary}`}>
      {label}
    </p>
  )
}

export default BtnMain