import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPieKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPieKnob: ForwardRefExoticComponent<StopwatchPieKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPieKnob;
export { StopwatchPieKnob };
