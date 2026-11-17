import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell1: ForwardRefExoticComponent<Bell1Props & RefAttributes<SVGSVGElement>>;

export default Bell1;
export { Bell1 };
