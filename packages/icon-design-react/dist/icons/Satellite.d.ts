import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SatelliteProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Satellite: ForwardRefExoticComponent<SatelliteProps & RefAttributes<SVGSVGElement>>;

export default Satellite;
export { Satellite };
