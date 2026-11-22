import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareRoundCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareRoundCorner: ForwardRefExoticComponent<SquareRoundCornerProps & RefAttributes<SVGSVGElement>>;

export default SquareRoundCorner;
export { SquareRoundCorner };
