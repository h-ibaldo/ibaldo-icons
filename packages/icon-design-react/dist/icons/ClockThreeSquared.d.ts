import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockThreeSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockThreeSquared: ForwardRefExoticComponent<ClockThreeSquaredProps & RefAttributes<SVGSVGElement>>;

export default ClockThreeSquared;
export { ClockThreeSquared };
