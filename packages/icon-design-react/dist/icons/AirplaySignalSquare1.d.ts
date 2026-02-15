import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignalSquare1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignalSquare1: ForwardRefExoticComponent<AirplaySignalSquare1Props & RefAttributes<SVGSVGElement>>;

export default AirplaySignalSquare1;
export { AirplaySignalSquare1 };
