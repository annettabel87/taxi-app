import Booking from "./(components)/Booking/Booking";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
          <Booking />
        <div className="col-span-2">map</div>
      </div>
    </div>
  );
}
