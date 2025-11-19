import { useMutation } from "@tanstack/react-query";
import { logout } from "../../services/apiAuth";

export function useLogout() {
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logout,
  });
}
