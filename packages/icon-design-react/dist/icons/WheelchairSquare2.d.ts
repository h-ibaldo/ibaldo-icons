import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WheelchairSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WheelchairSquare2: ForwardRefExoticComponent<WheelchairSquare2Props & RefAttributes<SVGSVGElement>>;

export default WheelchairSquare2;
export { WheelchairSquare2 };
