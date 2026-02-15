import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignal4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignal4: ForwardRefExoticComponent<AirplaySignal4Props & RefAttributes<SVGSVGElement>>;

export default AirplaySignal4;
export { AirplaySignal4 };
