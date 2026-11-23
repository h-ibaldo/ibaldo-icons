import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MagnetRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MagnetRight: ForwardRefExoticComponent<MagnetRightProps & RefAttributes<SVGSVGElement>>;

export default MagnetRight;
export { MagnetRight };
