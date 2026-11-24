import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormRowsCheckboxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormRowsCheckbox: ForwardRefExoticComponent<FormRowsCheckboxProps & RefAttributes<SVGSVGElement>>;

export default FormRowsCheckbox;
export { FormRowsCheckbox };
