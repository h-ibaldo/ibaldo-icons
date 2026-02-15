import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormInputText2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FormInputText2: ForwardRefExoticComponent<FormInputText2Props & RefAttributes<SVGSVGElement>>;

export default FormInputText2;
export { FormInputText2 };
