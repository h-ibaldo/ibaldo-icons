import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Form4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form4: ForwardRefExoticComponent<Form4Props & RefAttributes<SVGSVGElement>>;

export default Form4;
export { Form4 };
