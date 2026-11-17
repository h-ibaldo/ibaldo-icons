import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6ZProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6Z: ForwardRefExoticComponent<Bell6ZProps & RefAttributes<SVGSVGElement>>;

export default Bell6Z;
export { Bell6Z };
