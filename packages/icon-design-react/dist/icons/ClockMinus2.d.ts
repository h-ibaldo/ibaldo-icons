import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockMinus2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockMinus2: ForwardRefExoticComponent<ClockMinus2Props & RefAttributes<SVGSVGElement>>;

export default ClockMinus2;
export { ClockMinus2 };
