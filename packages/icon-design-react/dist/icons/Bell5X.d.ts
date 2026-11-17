import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5X: ForwardRefExoticComponent<Bell5XProps & RefAttributes<SVGSVGElement>>;

export default Bell5X;
export { Bell5X };
