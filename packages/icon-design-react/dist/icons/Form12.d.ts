import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Form12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form12: ForwardRefExoticComponent<Form12Props & RefAttributes<SVGSVGElement>>;

export default Form12;
export { Form12 };
