import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignalCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignalCircle: ForwardRefExoticComponent<AirplaySignalCircleProps & RefAttributes<SVGSVGElement>>;

export default AirplaySignalCircle;
export { AirplaySignalCircle };
