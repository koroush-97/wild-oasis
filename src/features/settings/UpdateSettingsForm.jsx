import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSetting";

function UpdateSettingsForm() {
  const { isLoading, settings:{
    minBookingLength,
    maxBookingLengh,
  } } = useSettings();
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights"  defaultValue={} />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" defaultValue={} />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests" defaultValue={} />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input type="number" id="breakfast-price" defaultValue={} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
