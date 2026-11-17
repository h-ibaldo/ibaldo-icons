import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileBoundsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileBounds: ForwardRefExoticComponent<MobileBoundsProps & RefAttributes<SVGSVGElement>>;

export default MobileBounds;
export { MobileBounds };
