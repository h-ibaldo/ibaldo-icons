import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearSearchDownProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearSearchDown: ForwardRefExoticComponent<GearSearchDownProps & RefAttributes<SVGSVGElement>>;

export default GearSearchDown;
export { GearSearchDown };
