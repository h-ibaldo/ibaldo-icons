import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearProgressProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearProgress: ForwardRefExoticComponent<GearProgressProps & RefAttributes<SVGSVGElement>>;

export default GearProgress;
export { GearProgress };
