import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchOffKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchOffKnob: ForwardRefExoticComponent<StopwatchOffKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchOffKnob;
export { StopwatchOffKnob };
