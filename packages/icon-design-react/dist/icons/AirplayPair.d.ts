import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplayPairProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AirplayPair: ForwardRefExoticComponent<AirplayPairProps & RefAttributes<SVGSVGElement>>;

export default AirplayPair;
export { AirplayPair };
