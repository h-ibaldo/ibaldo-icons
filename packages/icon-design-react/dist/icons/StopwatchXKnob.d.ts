import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchXKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchXKnob: ForwardRefExoticComponent<StopwatchXKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchXKnob;
export { StopwatchXKnob };
