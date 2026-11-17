import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2DotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Dot: ForwardRefExoticComponent<Bell2DotProps & RefAttributes<SVGSVGElement>>;

export default Bell2Dot;
export { Bell2Dot };
