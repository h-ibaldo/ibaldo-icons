import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5SquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5SquareDot: ForwardRefExoticComponent<Bell5SquareDotProps & RefAttributes<SVGSVGElement>>;

export default Bell5SquareDot;
export { Bell5SquareDot };
