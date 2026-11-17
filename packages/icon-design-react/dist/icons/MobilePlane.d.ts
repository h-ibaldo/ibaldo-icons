import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobilePlaneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobilePlane: ForwardRefExoticComponent<MobilePlaneProps & RefAttributes<SVGSVGElement>>;

export default MobilePlane;
export { MobilePlane };
