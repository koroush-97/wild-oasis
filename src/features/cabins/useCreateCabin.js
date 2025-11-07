const queryClient = useQueryClient();

const { mutate, isPending: isCreating } = useMutation({
  mutationFn: createCabin,
  onSuccess: () => {
    toast.success("New cabin successfully created");
    queryClient.invalidateQueries({ queryKey: ["cabin"] });
    reset();
  },
  onError: (err) => toast.error(err.message),
});
