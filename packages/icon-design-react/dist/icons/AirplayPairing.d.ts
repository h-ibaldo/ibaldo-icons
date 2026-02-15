import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplayPairingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplayPairing: ForwardRefExoticComponent<AirplayPairingProps & RefAttributes<SVGSVGElement>>;

export default AirplayPairing;
export { AirplayPairing };
