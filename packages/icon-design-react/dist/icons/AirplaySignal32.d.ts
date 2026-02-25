import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignal32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignal32: ForwardRefExoticComponent<AirplaySignal32Props & RefAttributes<SVGSVGElement>>;

export default AirplaySignal32;
export { AirplaySignal32 };
