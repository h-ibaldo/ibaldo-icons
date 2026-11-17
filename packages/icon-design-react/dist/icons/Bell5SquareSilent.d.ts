import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5SquareSilentProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5SquareSilent: ForwardRefExoticComponent<Bell5SquareSilentProps & RefAttributes<SVGSVGElement>>;

export default Bell5SquareSilent;
export { Bell5SquareSilent };
