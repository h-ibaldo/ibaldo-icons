import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockDots2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockDots2: ForwardRefExoticComponent<ClockDots2Props & RefAttributes<SVGSVGElement>>;

export default ClockDots2;
export { ClockDots2 };
