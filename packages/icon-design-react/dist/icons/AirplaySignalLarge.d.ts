import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignalLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignalLarge: ForwardRefExoticComponent<AirplaySignalLargeProps & RefAttributes<SVGSVGElement>>;

export default AirplaySignalLarge;
export { AirplaySignalLarge };
