import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPlus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPlus2: ForwardRefExoticComponent<ClockPlus2Props & RefAttributes<SVGSVGElement>>;

export default ClockPlus2;
export { ClockPlus2 };
