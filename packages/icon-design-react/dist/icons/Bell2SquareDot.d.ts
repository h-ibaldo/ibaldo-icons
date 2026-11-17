import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2SquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2SquareDot: ForwardRefExoticComponent<Bell2SquareDotProps & RefAttributes<SVGSVGElement>>;

export default Bell2SquareDot;
export { Bell2SquareDot };
