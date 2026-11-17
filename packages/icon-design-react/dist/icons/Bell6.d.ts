import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6: ForwardRefExoticComponent<Bell6Props & RefAttributes<SVGSVGElement>>;

export default Bell6;
export { Bell6 };
