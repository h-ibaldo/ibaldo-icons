import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckDouble2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckDouble2: ForwardRefExoticComponent<CheckDouble2Props & RefAttributes<SVGSVGElement>>;

export default CheckDouble2;
export { CheckDouble2 };
