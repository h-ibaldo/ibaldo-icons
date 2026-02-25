import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Form42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form42: ForwardRefExoticComponent<Form42Props & RefAttributes<SVGSVGElement>>;

export default Form42;
export { Form42 };
