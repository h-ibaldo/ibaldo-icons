import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchMinusKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchMinusKnob: ForwardRefExoticComponent<StopwatchMinusKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchMinusKnob;
export { StopwatchMinusKnob };
