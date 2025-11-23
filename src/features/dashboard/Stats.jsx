import Stat from "./Stat";

function Stats({ bookings, confirmedStays }) {
  // 1.
  const numBookings = bookings.lenght;

  return (
    <>
      <Stat />
      <Stat />
      <Stat />
      <Stat />
    </>
  );
}

export default Stats;
