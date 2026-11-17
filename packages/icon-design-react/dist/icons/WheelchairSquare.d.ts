import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WheelchairSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WheelchairSquare: ForwardRefExoticComponent<WheelchairSquareProps & RefAttributes<SVGSVGElement>>;

export default WheelchairSquare;
export { WheelchairSquare };
