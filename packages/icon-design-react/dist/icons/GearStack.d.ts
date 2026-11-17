import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearStack: ForwardRefExoticComponent<GearStackProps & RefAttributes<SVGSVGElement>>;

export default GearStack;
export { GearStack };
