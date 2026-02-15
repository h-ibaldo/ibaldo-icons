import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignal3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignal3: ForwardRefExoticComponent<AirplaySignal3Props & RefAttributes<SVGSVGElement>>;

export default AirplaySignal3;
export { AirplaySignal3 };
