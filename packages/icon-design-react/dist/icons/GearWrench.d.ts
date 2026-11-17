import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearWrenchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearWrench: ForwardRefExoticComponent<GearWrenchProps & RefAttributes<SVGSVGElement>>;

export default GearWrench;
export { GearWrench };
