import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMarkDouble2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMarkDouble2: ForwardRefExoticComponent<CheckMarkDouble2Props & RefAttributes<SVGSVGElement>>;

export default CheckMarkDouble2;
export { CheckMarkDouble2 };
