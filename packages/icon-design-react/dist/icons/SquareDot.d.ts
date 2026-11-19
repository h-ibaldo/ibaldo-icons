import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareDot: ForwardRefExoticComponent<SquareDotProps & RefAttributes<SVGSVGElement>>;

export default SquareDot;
export { SquareDot };
