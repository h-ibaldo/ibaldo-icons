import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CylinderClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CylinderClock: ForwardRefExoticComponent<CylinderClockProps & RefAttributes<SVGSVGElement>>;

export default CylinderClock;
export { CylinderClock };
