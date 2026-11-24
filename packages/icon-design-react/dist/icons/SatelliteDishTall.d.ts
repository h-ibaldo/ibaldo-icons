import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SatelliteDishTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SatelliteDishTall: ForwardRefExoticComponent<SatelliteDishTallProps & RefAttributes<SVGSVGElement>>;

export default SatelliteDishTall;
export { SatelliteDishTall };
