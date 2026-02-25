import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockView2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockView2: ForwardRefExoticComponent<ClockView2Props & RefAttributes<SVGSVGElement>>;

export default ClockView2;
export { ClockView2 };
