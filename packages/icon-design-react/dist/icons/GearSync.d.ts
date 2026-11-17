import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSyncProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSync: ForwardRefExoticComponent<GearSyncProps & RefAttributes<SVGSVGElement>>;

export default GearSync;
export { GearSync };
