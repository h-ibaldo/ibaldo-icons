import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchKnob: ForwardRefExoticComponent<StopwatchKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchKnob;
export { StopwatchKnob };
