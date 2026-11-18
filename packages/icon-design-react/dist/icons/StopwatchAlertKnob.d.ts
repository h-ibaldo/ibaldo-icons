import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StopwatchAlertKnobProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StopwatchAlertKnob: ForwardRefExoticComponent<StopwatchAlertKnobProps & RefAttributes<SVGSVGElement>>;

export default StopwatchAlertKnob;
export { StopwatchAlertKnob };
