import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Form3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Form3: ForwardRefExoticComponent<Form3Props & RefAttributes<SVGSVGElement>>;

export default Form3;
export { Form3 };
