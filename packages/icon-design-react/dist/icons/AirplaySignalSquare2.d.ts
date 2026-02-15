import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignalSquare2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignalSquare2: ForwardRefExoticComponent<AirplaySignalSquare2Props & RefAttributes<SVGSVGElement>>;

export default AirplaySignalSquare2;
export { AirplaySignalSquare2 };
