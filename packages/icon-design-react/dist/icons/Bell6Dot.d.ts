import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6DotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6Dot: ForwardRefExoticComponent<Bell6DotProps & RefAttributes<SVGSVGElement>>;

export default Bell6Dot;
export { Bell6Dot };
