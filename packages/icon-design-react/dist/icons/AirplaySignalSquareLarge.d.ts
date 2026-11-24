import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignalSquareLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignalSquareLarge: ForwardRefExoticComponent<AirplaySignalSquareLargeProps & RefAttributes<SVGSVGElement>>;

export default AirplaySignalSquareLarge;
export { AirplaySignalSquareLarge };
