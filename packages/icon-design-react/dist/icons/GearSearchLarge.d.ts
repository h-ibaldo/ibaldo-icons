import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSearchLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSearchLarge: ForwardRefExoticComponent<GearSearchLargeProps & RefAttributes<SVGSVGElement>>;

export default GearSearchLarge;
export { GearSearchLarge };
