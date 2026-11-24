import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSyncLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSyncLarge: ForwardRefExoticComponent<GearSyncLargeProps & RefAttributes<SVGSVGElement>>;

export default GearSyncLarge;
export { GearSyncLarge };
