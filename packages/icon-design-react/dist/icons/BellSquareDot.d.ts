import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellSquareDotProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellSquareDot: ForwardRefExoticComponent<BellSquareDotProps & RefAttributes<SVGSVGElement>>;

export default BellSquareDot;
export { BellSquareDot };
