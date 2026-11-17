import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5DotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Dot: ForwardRefExoticComponent<Bell5DotProps & RefAttributes<SVGSVGElement>>;

export default Bell5Dot;
export { Bell5Dot };
