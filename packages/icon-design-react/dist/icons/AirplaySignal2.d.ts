import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignal2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignal2: ForwardRefExoticComponent<AirplaySignal2Props & RefAttributes<SVGSVGElement>>;

export default AirplaySignal2;
export { AirplaySignal2 };
