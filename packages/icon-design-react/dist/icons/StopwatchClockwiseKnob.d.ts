import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchClockwiseKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchClockwiseKnob: ForwardRefExoticComponent<StopwatchClockwiseKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchClockwiseKnob;
export { StopwatchClockwiseKnob };
