import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4DotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4Dot: ForwardRefExoticComponent<Bell4DotProps & RefAttributes<SVGSVGElement>>;

export default Bell4Dot;
export { Bell4Dot };
