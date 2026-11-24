import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FormProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form: ForwardRefExoticComponent<FormProps & RefAttributes<SVGSVGElement>>;

export default Form;
export { Form };
