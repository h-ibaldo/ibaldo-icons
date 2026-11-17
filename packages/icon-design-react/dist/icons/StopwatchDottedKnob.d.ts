import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchDottedKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchDottedKnob: ForwardRefExoticComponent<StopwatchDottedKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchDottedKnob;
export { StopwatchDottedKnob };
