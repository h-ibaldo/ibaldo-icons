import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell1DotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell1Dot: ForwardRefExoticComponent<Bell1DotProps & RefAttributes<SVGSVGElement>>;

export default Bell1Dot;
export { Bell1Dot };
