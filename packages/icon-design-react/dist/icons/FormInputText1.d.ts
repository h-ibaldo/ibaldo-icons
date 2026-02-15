import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormInputText1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormInputText1: ForwardRefExoticComponent<FormInputText1Props & RefAttributes<SVGSVGElement>>;

export default FormInputText1;
export { FormInputText1 };
