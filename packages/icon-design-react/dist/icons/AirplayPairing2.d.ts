import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplayPairing2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplayPairing2: ForwardRefExoticComponent<AirplayPairing2Props & RefAttributes<SVGSVGElement>>;

export default AirplayPairing2;
export { AirplayPairing2 };
