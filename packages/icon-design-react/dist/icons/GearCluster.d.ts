import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearClusterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearCluster: ForwardRefExoticComponent<GearClusterProps & RefAttributes<SVGSVGElement>>;

export default GearCluster;
export { GearCluster };
