import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormCheckboxProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormCheckbox: ForwardRefExoticComponent<FormCheckboxProps & RefAttributes<SVGSVGElement>>;

export default FormCheckbox;
export { FormCheckbox };
