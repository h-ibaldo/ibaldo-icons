import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4XProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4X: ForwardRefExoticComponent<Bell4XProps & RefAttributes<SVGSVGElement>>;

export default Bell4X;
export { Bell4X };
