import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Form2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form2: ForwardRefExoticComponent<Form2Props & RefAttributes<SVGSVGElement>>;

export default Form2;
export { Form2 };
