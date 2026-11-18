import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChalkboardMathProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChalkboardMath: ForwardRefExoticComponent<ChalkboardMathProps & RefAttributes<SVGSVGElement>>;

export default ChalkboardMath;
export { ChalkboardMath };
