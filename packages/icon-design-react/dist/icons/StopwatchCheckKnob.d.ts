import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchCheckKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchCheckKnob: ForwardRefExoticComponent<StopwatchCheckKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchCheckKnob;
export { StopwatchCheckKnob };
