import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SatelliteDishProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SatelliteDish: ForwardRefExoticComponent<SatelliteDishProps & RefAttributes<SVGSVGElement>>;

export default SatelliteDish;
export { SatelliteDish };
