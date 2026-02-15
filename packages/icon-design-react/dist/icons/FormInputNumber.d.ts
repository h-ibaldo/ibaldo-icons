import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormInputNumberProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormInputNumber: ForwardRefExoticComponent<FormInputNumberProps & RefAttributes<SVGSVGElement>>;

export default FormInputNumber;
export { FormInputNumber };
