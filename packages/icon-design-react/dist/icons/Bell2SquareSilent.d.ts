import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2SquareSilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2SquareSilent: ForwardRefExoticComponent<Bell2SquareSilentProps & RefAttributes<SVGSVGElement>>;

export default Bell2SquareSilent;
export { Bell2SquareSilent };
