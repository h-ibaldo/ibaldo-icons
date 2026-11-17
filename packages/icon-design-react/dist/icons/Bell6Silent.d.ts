import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6SilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6Silent: ForwardRefExoticComponent<Bell6SilentProps & RefAttributes<SVGSVGElement>>;

export default Bell6Silent;
export { Bell6Silent };
