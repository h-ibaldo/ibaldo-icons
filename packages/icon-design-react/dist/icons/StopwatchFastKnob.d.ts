import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchFastKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchFastKnob: ForwardRefExoticComponent<StopwatchFastKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchFastKnob;
export { StopwatchFastKnob };
