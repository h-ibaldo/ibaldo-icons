import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AirplayProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Airplay: ForwardRefExoticComponent<AirplayProps & RefAttributes<SVGSVGElement>>;

export default Airplay;
export { Airplay };
