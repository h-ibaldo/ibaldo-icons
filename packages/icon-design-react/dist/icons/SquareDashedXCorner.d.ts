import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareDashedXCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareDashedXCorner: ForwardRefExoticComponent<SquareDashedXCornerProps & RefAttributes<SVGSVGElement>>;

export default SquareDashedXCorner;
export { SquareDashedXCorner };
