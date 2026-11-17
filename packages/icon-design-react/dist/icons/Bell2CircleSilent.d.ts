import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2CircleSilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2CircleSilent: ForwardRefExoticComponent<Bell2CircleSilentProps & RefAttributes<SVGSVGElement>>;

export default Bell2CircleSilent;
export { Bell2CircleSilent };
