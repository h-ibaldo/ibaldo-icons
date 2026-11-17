import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignalSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignalSquare: ForwardRefExoticComponent<AirplaySignalSquareProps & RefAttributes<SVGSVGElement>>;

export default AirplaySignalSquare;
export { AirplaySignalSquare };
