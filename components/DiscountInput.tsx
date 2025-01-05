import React from "react";
import { NumberInputProps, useFormValue } from "sanity";
import { TextInput } from "@sanity/ui";
import { set, unset, PatchEvent } from "sanity";

const DiscountInput = (props: NumberInputProps) => {
  const { value, onChange } = props;

  // Get the current values of oldPrice and newPrice
  const oldPrice = useFormValue(["oldPrice"]) as number | undefined;
  const newPrice = useFormValue(["newPrice"]) as number | undefined;

  // Calculate the discount
  const discount =
    oldPrice && newPrice ? Math.round(((oldPrice - newPrice) / oldPrice) * 100) : 0;

  // Update the discount field value
  React.useEffect(() => {
    if (discount !== Number(value)) {
      const patch = discount ? set(discount) : unset();
      onChange(PatchEvent.from(patch));
    }
  }, [discount, value, onChange]);

  return (
    <TextInput
      value={discount ? `${discount}%` : "No discount"}
      readOnly
      disabled
    />
  );
};

export default DiscountInput;