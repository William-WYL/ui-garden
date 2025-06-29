export interface RadioButtonProps {
  label: string;
  name: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}
