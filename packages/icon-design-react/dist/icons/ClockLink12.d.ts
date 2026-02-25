import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockLink12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockLink12: ForwardRefExoticComponent<ClockLink12Props & RefAttributes<SVGSVGElement>>;

export default ClockLink12;
export { ClockLink12 };
