import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchPinKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchPinKnob: ForwardRefExoticComponent<StopwatchPinKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchPinKnob;
export { StopwatchPinKnob };
