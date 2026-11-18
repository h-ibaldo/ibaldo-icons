import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPinProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPin: ForwardRefExoticComponent<StopwatchPinProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPin;
export { StopwatchPin };
