import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockCheck2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockCheck2: ForwardRefExoticComponent<ClockCheck2Props & RefAttributes<SVGSVGElement>>;

export default ClockCheck2;
export { ClockCheck2 };
