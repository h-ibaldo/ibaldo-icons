import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearMultipleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearMultiple: ForwardRefExoticComponent<GearMultipleProps & RefAttributes<SVGSVGElement>>;

export default GearMultiple;
export { GearMultiple };
