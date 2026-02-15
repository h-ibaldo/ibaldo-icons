import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockLink1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockLink1: ForwardRefExoticComponent<ClockLink1Props & RefAttributes<SVGSVGElement>>;

export default ClockLink1;
export { ClockLink1 };
