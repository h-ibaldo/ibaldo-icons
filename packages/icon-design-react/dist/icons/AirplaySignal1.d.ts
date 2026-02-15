import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignal1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignal1: ForwardRefExoticComponent<AirplaySignal1Props & RefAttributes<SVGSVGElement>>;

export default AirplaySignal1;
export { AirplaySignal1 };
