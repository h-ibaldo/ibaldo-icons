import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2X: ForwardRefExoticComponent<Bell2XProps & RefAttributes<SVGSVGElement>>;

export default Bell2X;
export { Bell2X };
