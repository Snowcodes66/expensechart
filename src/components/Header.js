import classes from "./Header.module.css";
import circle from '../assets/logo.svg'
const Header = () => {
  return (
    <div className={classes["balance-div"]}>
      <div className={classes.balance}>
        <p>My Balance</p>
        <h4>$921.48</h4>
      </div>
      <img className={classes.circle} src={circle} alt="circle" />
    </div>
  );
};
export default Header;
