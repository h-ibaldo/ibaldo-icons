import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6CheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6Check: ForwardRefExoticComponent<Bell6CheckProps & RefAttributes<SVGSVGElement>>;

export default Bell6Check;
export { Bell6Check };
