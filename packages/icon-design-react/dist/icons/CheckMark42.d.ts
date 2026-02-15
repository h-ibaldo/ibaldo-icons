import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CheckMark42Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CheckMark42: ForwardRefExoticComponent<CheckMark42Props & RefAttributes<SVGSVGElement>>;

export default CheckMark42;
export { CheckMark42 };
