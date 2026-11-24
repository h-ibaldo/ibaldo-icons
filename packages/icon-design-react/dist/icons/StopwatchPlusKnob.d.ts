import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPlusKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPlusKnob: ForwardRefExoticComponent<StopwatchPlusKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPlusKnob;
export { StopwatchPlusKnob };
