import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockSquaredProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockSquared: ForwardRefExoticComponent<ClockSquaredProps & RefAttributes<SVGSVGElement>>;

export default ClockSquared;
export { ClockSquared };
