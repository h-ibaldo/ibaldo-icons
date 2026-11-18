import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockTicksSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockTicksSquared: ForwardRefExoticComponent<ClockTicksSquaredProps & RefAttributes<SVGSVGElement>>;

export default ClockTicksSquared;
export { ClockTicksSquared };
