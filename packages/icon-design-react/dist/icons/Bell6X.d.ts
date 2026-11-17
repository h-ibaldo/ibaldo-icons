import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6X: ForwardRefExoticComponent<Bell6XProps & RefAttributes<SVGSVGElement>>;

export default Bell6X;
export { Bell6X };
