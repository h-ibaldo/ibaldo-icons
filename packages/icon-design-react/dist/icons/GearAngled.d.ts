import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearAngledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearAngled: ForwardRefExoticComponent<GearAngledProps & RefAttributes<SVGSVGElement>>;

export default GearAngled;
export { GearAngled };
