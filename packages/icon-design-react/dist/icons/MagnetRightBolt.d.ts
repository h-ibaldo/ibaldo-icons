import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MagnetRightBoltProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MagnetRightBolt: ForwardRefExoticComponent<MagnetRightBoltProps & RefAttributes<SVGSVGElement>>;

export default MagnetRightBolt;
export { MagnetRightBolt };
