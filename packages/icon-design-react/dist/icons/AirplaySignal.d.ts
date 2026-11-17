import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplaySignalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplaySignal: ForwardRefExoticComponent<AirplaySignalProps & RefAttributes<SVGSVGElement>>;

export default AirplaySignal;
export { AirplaySignal };
