import { useMutation } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";

function useCheckin() {
  const { mutate: checkin, isLoading: isChekingIn } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
      }),
  });
}

export default useCheckin;
