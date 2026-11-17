import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSearchCornerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSearchCorner: ForwardRefExoticComponent<GearSearchCornerProps & RefAttributes<SVGSVGElement>>;

export default GearSearchCorner;
export { GearSearchCorner };
