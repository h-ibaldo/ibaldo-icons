import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockPlus: ForwardRefExoticComponent<ClockPlusProps & RefAttributes<SVGSVGElement>>;

export default ClockPlus;
export { ClockPlus };
