import Button from "../../ui/Button";

export default function AddCabin() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <Button onClick={() => setShowForm((show) => !show)}>
        {showForm && "close"}
        {!showForm && " Add new cabin"}
      </Button>
      {showForm && <CreateCabinForm />}
    </div>
  );
}
