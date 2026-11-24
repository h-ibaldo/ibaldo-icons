import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AntennaProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Antenna: ForwardRefExoticComponent<AntennaProps & RefAttributes<SVGSVGElement>>;

export default Antenna;
export { Antenna };
