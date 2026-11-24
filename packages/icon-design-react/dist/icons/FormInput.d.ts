import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormInputProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormInput: ForwardRefExoticComponent<FormInputProps & RefAttributes<SVGSVGElement>>;

export default FormInput;
export { FormInput };
