import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5: ForwardRefExoticComponent<Bell5Props & RefAttributes<SVGSVGElement>>;

export default Bell5;
export { Bell5 };
