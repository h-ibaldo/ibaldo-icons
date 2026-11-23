import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MagnetProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Magnet: ForwardRefExoticComponent<MagnetProps & RefAttributes<SVGSVGElement>>;

export default Magnet;
export { Magnet };
