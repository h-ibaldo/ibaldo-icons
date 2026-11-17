import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkDouble3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkDouble3: ForwardRefExoticComponent<CheckMarkDouble3Props & RefAttributes<SVGSVGElement>>;

export default CheckMarkDouble3;
export { CheckMarkDouble3 };
