import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5CircleSilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5CircleSilent: ForwardRefExoticComponent<Bell5CircleSilentProps & RefAttributes<SVGSVGElement>>;

export default Bell5CircleSilent;
export { Bell5CircleSilent };
