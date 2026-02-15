import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Form5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form5: ForwardRefExoticComponent<Form5Props & RefAttributes<SVGSVGElement>>;

export default Form5;
export { Form5 };
