import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Form1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form1: ForwardRefExoticComponent<Form1Props & RefAttributes<SVGSVGElement>>;

export default Form1;
export { Form1 };
