import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Form32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form32: ForwardRefExoticComponent<Form32Props & RefAttributes<SVGSVGElement>>;

export default Form32;
export { Form32 };
