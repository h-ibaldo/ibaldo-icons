import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockStar2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockStar2: ForwardRefExoticComponent<ClockStar2Props & RefAttributes<SVGSVGElement>>;

export default ClockStar2;
export { ClockStar2 };
